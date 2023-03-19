import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Card } from 'shared/UI/Card';
import { Candidate } from 'entities/Candidate';
import classes from './CandidatesPhotos.module.scss';

interface CandidatesPhotosProps {
    className?: string;
    selectedCandidates: Candidate[];
}

export const CandidatesPhotos = memo((props: CandidatesPhotosProps) => {
    const {
        className,
        selectedCandidates,
    } = props;

    return (
        <div />
    );
});
