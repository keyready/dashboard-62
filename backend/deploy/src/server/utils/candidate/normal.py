import matplotlib.pyplot as plt
import math

def mean(data):
    return sum(data) / len(data)

def std_dev(data, mu):
    squared_diff = [(x - mu)**2 for x in data]
    variance = sum(squared_diff) / len(data)
    return math.sqrt(variance)

def normal_distribution_values(data):
    mu = mean(data)
    sigma = std_dev(data, mu)

    # Генерация значений для построения графика нормального распределения
    x = [mu - 3*sigma + i*(6*sigma/100) for i in range(100)]
    y = [(1/(sigma * math.sqrt(2*math.pi))) * math.exp(-(xi - mu)**2 / (2*sigma**2)) for xi in x]

    return x, y