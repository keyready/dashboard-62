import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './Candidate.module.scss';

interface CandidateProps {
    className?: string;
}

export const Candidate = memo((props: CandidateProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(classes.Candidate, {}, [className])}>
            //
        </div>
    );
});
