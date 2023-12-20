import math

def mean(data):
    return sum(data) / len(data)

def std_dev(data, mu):
    squared_diff = sum((x - mu)**2 for x in data)
    return math.sqrt(squared_diff / len(data))

def calculate_expected_frequencies(data, bins, mu, sigma):
    expected_freq = []
    for i in range(len(bins) - 1):
        lower_bound, upper_bound = bins[i], bins[i + 1]
        cumulative_prob = (0.5 * (1 + math.erf((upper_bound - mu) / (sigma * math.sqrt(2)))) -
                           0.5 * (1 + math.erf((lower_bound - mu) / (sigma * math.sqrt(2)))))
        expected_freq.append(len(data) * cumulative_prob)
    return expected_freq

def calculate_chi_squared_statistic(observed_freq, expected_freq):
    chi_squared_stat = sum((observed - expected)**2 / expected for observed, expected in zip(observed_freq, expected_freq))
    return chi_squared_stat

def calculate_pirson(grades):
    mu = mean(grades)
    sigma = std_dev(grades, mu)

    min_value = min(grades)
    max_value = max(grades)

    num_bins = max_value - min_value + 1 
    bins = [i for i in range(min_value, max_value + 2)]  # добавляем 1 для включения верхней границы последнего бина

    expected_freq = calculate_expected_frequencies(grades, bins, mu, sigma)

    observed_freq = [sum(lower <= x < upper for x in grades) for lower, upper in zip(bins[:-1], bins[1:])]
    chi_squared_stat = calculate_chi_squared_statistic(observed_freq, expected_freq)

    degrees_of_freedom = len(bins) - 1 - 2  # Количество интервалов минус число оцениваемых параметров

    critical_value = 9.488  # Можно использовать таблицы критических значений хи-квадрат

    if chi_squared_stat > critical_value:
        flag=False
    else:
        flag=True


    return {
        "Статистика":chi_squared_stat,
        "Гипотеза":flag,
        "Частоты":expected_freq
    }
