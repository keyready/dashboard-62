from math import *

def calculate_statistic(grades_data):
    statObject = {
        "mathematicalExpectation": mean(grades_data),
        "variance": variance(grades_data),
        "meanSquareDeviation": std_deviation(grades_data),
        "median": median(grades_data),
        "asymmetryCoefficient": asymmetry_coefficient(grades_data),
        "kurtosisCoefficient": kurtosis_coefficient(grades_data),
        "differentialEntropy": entropy_value(grades_data)
    }
    return statObject

def mean(data):
    '''
                        DESCRIPTION
        Рассчет мат. ожидания для заданного массива данных(оценок). 
        Суммируем все элементы массива и делим полученную сумму на количество элементов.
    '''
    return sum(data) / len(data)

def variance(data):
    '''
                        DESCRIPTION
        Дисперсия представляет собой среднюю квадратичную разность между каждым элементом массива и средним значением.
    '''
    n = len(data)
    mean_value = mean(data)
    return sum((x - mean_value)**2 for x in data) / n

def std_deviation(data):
    '''
                        DESCRIPTION
        Стандартное отклонение измеряет степень разброса значений относительно их среднего значения.
    '''
    return variance(data)**0.5

def median(data):
    '''
                        DESCRIPTION
        Если количество элементов в массиве четное, то медиана вычисляется как среднее значение двух центральных элементов; 
        если количество элементов нечетное, то медианой является значение в середине отсортированного массива.
    '''
    sorted_data = sorted(data)
    n = len(sorted_data)
    if n % 2 == 0:
        mid1 = sorted_data[n // 2 - 1]
        mid2 = sorted_data[n // 2]
        return (mid1 + mid2) / 2
    else:
        return sorted_data[n // 2]

def asymmetry_coefficient(data):
    '''
                        DESCRIPTION
        Коэффициент ассиметрии описывает симметрию или асимметрию распределения относительно его среднего значения. 
        Положительное значение указывает на длинный хвост справа, отрицательное - на длинный хвост слева.
    '''
    n = len(data)
    mean_value = mean(data)
    std_dev = std_deviation(data)
    return sum(((x - mean_value) / std_dev)**3 for x in data) * (n / ((n - 1) * (n - 2)))

def kurtosis_coefficient(data):
    '''
                        DESCRIPTION
        Коэффициент эксцесса измеряет степень "остроконечности" распределения. 
        Положительное значение указывает на более высокую и узкую форму, отрицательное - на более плоскую и широкую форму.
    '''
    n = len(data)
    mean_value = mean(data)
    std_dev = std_deviation(data)
    return (sum(((x - mean_value) / std_dev)**4 for x in data) * (n * (n + 1))) / ((n - 1) * (n - 2) * (n - 3)) - (3 * (n - 1)**2) / ((n - 2) * (n - 3))

def entropy_value(data):
    """
                        DESCRIPTION
        Дифференциальная энтропия измеряет уровень "неопределенности" в распределении данных. 
        Чем выше энтропия, тем более разнообразны значения в выборке.
    """
    n = len(data)
    counts = {}
    for value in data:
        counts[value] = counts.get(value, 0) + 1

    entropy = 0
    for count in counts.values():
        probability = count / n
        entropy -= probability * (probability and log2(probability))

    return entropy

