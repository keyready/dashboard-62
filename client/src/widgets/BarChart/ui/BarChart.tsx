import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './BarChart.module.scss';

interface BarChartProps {
    className?: string;
}

export const BarChart = memo((props: BarChartProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return <div className={classNames(classes.BarChart, {}, [className])}>{t('BarChart')}</div>;
});
