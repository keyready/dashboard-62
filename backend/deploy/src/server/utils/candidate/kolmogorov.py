import math

def empirical_cdf(data):
    n = len(data)
    return [i / n for i in range(1, n + 1)]

def normal_distribution_cdf(x, mean, std_dev):
    return 0.5 * (1 + math.erf((x - mean) / (std_dev * math.sqrt(2))))

def kolmogorov_test(data):
    mean = sum(data) / len(data)
    # Сортируем данные
    data_sorted = sorted(data)

    # Расчет эмпирической функции распределения (ЭФР)
    ecdf = empirical_cdf(data)

    # Расчет теоретической функции распределения (ТФР) для нормального распределения
    cdf_theoretical = [normal_distribution_cdf(x, mean=sum(data)/len(data), std_dev=math.sqrt(sum((x - mean)**2 for x in data) / len(data))) for x in data]

    # Расчет статистики Колмогорова
    d = max(abs(ecdf_val - cdf_val) for ecdf_val, cdf_val in zip(ecdf, cdf_theoretical))

    # Расчет критического значения для уровня значимости 0.05 (для больших выборок можно использовать таблицы)
    n = len(data_sorted)
    critical_value = 1.36 / (n ** 0.5)

    # Вывод результатов
    print("Статистика Колмогорова:", d)
    print("Критическое значение:", critical_value)

    # Проверка гипотезы
    if d > critical_value:
        flag = False
    else:
        flag = True

    return {
        "Статистика Колмогорова":d,
        "Критическое значение":critical_value,
        "Гипотеза": flag
    }