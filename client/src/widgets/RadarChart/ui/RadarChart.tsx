import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './RadarChart.module.scss';

interface RadarChartProps {
    className?: string;
}

export const RadarChart = memo((props: RadarChartProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return <div className={classNames(classes.RadarChart, {}, [className])}>{t('RadarChart')}</div>;
});
