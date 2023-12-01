import json,yaml,xmltodict,os,string,random
from yaml.loader import SafeLoader
import numpy as np
from scipy.stats import kstest, norm, chi2, ksone

from server import db
from server.models import Candidate


def check_candidate_in_db(email):
    candidate=Candidate.query.filter_by(email=email).first()
    if candidate is not None:return True
    return False

def parse_diagramData(ids: list):
    diagramData = {}

    candidate=Candidate.query.filter_by(id=int(ids[0])).first()
    labels=['Общий балл']
    for subject in candidate.subjectsEstimation:
        labels.append(subject['title'])
    diagramData.update({'labels':labels})

    datasets=[]
    candidates=Candidate.query.filter(Candidate.id.in_(ids)).all()
    for cnd in candidates:
        dataset={}
        dataset.update({'label':cnd.lastname})
        data=[]
        for subject in cnd.subjectsEstimation:
            data.append(subject['score'])
        dataset.update({'data':data[:len(labels)]})
        datasets.append(dataset)
        
    diagramData.update({'datasets':datasets})
    return diagramData

def save_candidate_in_db(candidate_data,dirName):
    averageScore=average_score(candidate_data['subjectsEstimation'])
    db.session.add(Candidate(
        firstname=candidate_data['firstname'],
        middlename=candidate_data['middlename'],
        lastname=candidate_data['lastname'],
        email=candidate_data['email'],
        age=candidate_data['age'],
        averageSubjectsScore=averageScore,
        phoneNumber=candidate_data['phoneNumber'],
        img=f'static/files/{dirName}/avatar.jpg',
        faculty=candidate_data['faculty'],
        department=candidate_data['department'],
        keySkills=candidate_data['keySkills'],
        subjectsEstimation=candidate_data['subjectsEstimation']
    ))
    db.session.commit()
    return 1

def xml_parser(form):
    data_dict=xmltodict.parse(form.read())
    candidate_data=json.dumps(data_dict)
    return candidate_data

def yml_parser(form):
    data_dict=yaml.load(form.read(),Loader=SafeLoader)
    candidate_data=json.dumps(data_dict)
    return candidate_data

def json_parser(form):
    candidate_data=json.loads(form.read()) 
    return candidate_data

def list_score(jsonCandidate):
    data=[]
    for object in jsonCandidate['subjectsEstimation']:
        data.append(object['score'])
    return np.array(data)

def normal_distribution_data(grades: np.array):
    """
    Возвращает данные для построения гистограммы и графика нормального распределения.

    Параметры:
    - grades: массив оценок выпускника

    Возвращает:
    - Словарь с данными для построения графика
    """
    data_dict = {}

    # Параметры нормального распределения
    mean = np.mean(grades)
    std_dev = np.std(grades)

    # Данные для построения гистограммы
    hist, bin_edges = np.histogram(grades, bins=10, density=True)
    data_dict['hist'] = {'values': hist, 'edges': bin_edges}

    # Данные для построения графика нормального распределения
    x = np.linspace(min(grades), max(grades), 100)
    pdf = norm.pdf(x, mean, std_dev)
    data_dict['normal_distribution'] = {'x': x, 'pdf': pdf}

    # Среднее и стандартное отклонение
    data_dict['mean'] = mean
    data_dict['std_dev'] = std_dev

    return data_dict

def kolmogorov_test(grades: np.array):
    """
    Проверка гипотезы о соответствии оценок выпускника теоретическому нормальному распределению.

    Параметры:
    - grades: массив оценок выпускника

    Возвращает:
    - Объект со значениями и соответсвию/несоответствию гипотезе
    """

    # Выбор теоретического распределения (нормальное распределение)
    theoretical_cdf = lambda x: norm.cdf(x, loc=np.mean(grades), scale=np.std(grades))

    # Применение теста Колмогорова
    ks_statistic, ks_p_value = kstest(grades, theoretical_cdf)

    # Уровень значимости (обычно 0.05)
    alpha = 0.05

    data = {
        'stat':ks_statistic,
        'criticalValue':ks_p_value,
        'flag': 'Гипотеза Колмогорова принимается: Распределение данных соответствует теоретическому.' if ks_p_value > alpha else 'Гипотеза Колмогорова отвергается: Распределение данных не соответствует теоретическому.',
    }

    return data

def pearson_test(grades: np.array, bins=10, alpha=0.05):
    """
    Проверка гипотезы о соответствии оценок выпускника теоретическому нормальному распределению методом Пирсона.

    Параметры:
    - grades: массив оценок выпускника
    - bins: количество интервалов (по умолчанию 10)
    - alpha: уровень значимости (по умолчанию 0.05)

    Возвращает:
    - Объект со значениями и соответсвию/несоответствию гипотезе
    """
    observed_frequencies, bin_edges = np.histogram(grades, bins=bins)
    bin_centers = (bin_edges[:-1] + bin_edges[1:]) / 2

    # Оценка параметров нормального распределения
    mean, std_dev = np.mean(grades), np.std(grades)

    # Ожидаемые частоты для каждого интервала
    expected_frequencies = len(grades) * np.diff(bin_edges) * norm.pdf(bin_centers, loc=mean, scale=std_dev)

    # Вычисление статистики хи-квадрат
    chi_squared_statistic = np.sum((observed_frequencies - expected_frequencies)**2 / expected_frequencies)

    # Степени свободы
    degrees_of_freedom = bins - 1

    # Критическое значение для заданного уровня значимости
    critical_value = chi2.ppf(1 - alpha, degrees_of_freedom)

    data = {
        'stat':chi_squared_statistic,
        'criticalValue':critical_value,
        'flag': 'Гипотеза Пирсона принимается: Распределение данных соответствует теоретическому.'  if chi_squared_statistic <= critical_value else 'Гипотеза Пирсона отвергается: Распределение данных не соответствует теоретическому.'
    }

    return data

def average_score(cnd):
    digit=0
    for obj in cnd:
        digit+=obj['score']
    return digit/len(cnd)