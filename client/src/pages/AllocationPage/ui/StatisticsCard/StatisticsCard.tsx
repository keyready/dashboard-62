import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect, useState } from 'react';
import { VStack } from 'shared/UI/Stack';
import { DiplomaScoreInput } from 'shared/UI/DiplomaScoreInput';
import classes from './StatisticsCard.module.scss';

export interface Statistics {
    mathematicalExpectation: number;
    variance: number;
    meanSquareDeviation: number;
    median: number;
    asymmetryCoefficient: number;
    kurtosisCoefficient: number;
    differentialEntropy: number;
}

interface StatisticsCardProps {
    className?: string;
    statistics: Statistics;
}

export const StatisticsCard = memo((props: StatisticsCardProps) => {
    const { className, statistics } = props;

    return (
        <VStack className={classNames(classes.StatisticsCard, {}, [className])}>
            <DiplomaScoreInput
                className={classes.field}
                title="Математическое ожидание"
                value={statistics.mathematicalExpectation}
                disabled
            />
            <DiplomaScoreInput
                className={classes.field}
                title="Дисперсия"
                value={statistics.variance}
                disabled
            />
            <DiplomaScoreInput
                className={classes.field}
                title="Среднее квадратичное отклонение"
                value={statistics.meanSquareDeviation}
                disabled
            />
            <DiplomaScoreInput
                className={classes.field}
                title="Медиана"
                value={statistics.median}
                disabled
            />
            <DiplomaScoreInput
                className={classes.field}
                title="Коэффициент асимметрии"
                value={statistics.asymmetryCoefficient}
                disabled
            />
            <DiplomaScoreInput
                className={classes.field}
                title="Коэффициент эксцесса"
                value={statistics.kurtosisCoefficient}
                disabled
            />
            <DiplomaScoreInput
                className={classes.field}
                title="Дифференциальная энтропия"
                value={statistics.differentialEntropy}
                disabled
            />
        </VStack>
    );
});
