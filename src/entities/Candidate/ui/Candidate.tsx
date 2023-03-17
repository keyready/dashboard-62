import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './Candidate.module.scss';

interface CandidateProps {
    className?: string;
}

export const Candidate = memo((props: CandidateProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames(classes.Candidate, {}, [className])}>
            {t('Candidate')}
        </div>
    );
});
