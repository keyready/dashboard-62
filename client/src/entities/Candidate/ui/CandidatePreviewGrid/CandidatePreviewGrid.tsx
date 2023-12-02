import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { CandidatePreviewCard } from 'entities/Candidate';
import classes from './CandidatePreviewGrid.module.scss';
import { Candidate } from '../../model/types/Candidate';

interface CandidatePreviewGridProps {
    className?: string;
    candidates: Candidate[];
    handleCandidateDelete?: (candidateId: number) => void;
    gridColumns?: number;
}

export const CandidatePreviewGrid = memo((props: CandidatePreviewGridProps) => {
    const { className, candidates, handleCandidateDelete, gridColumns } = props;

    return (
        <div
            style={{
                gridTemplateColumns: gridColumns ? `repeat(${gridColumns}, 1fr)` : 'repeat(4, 1fr)',
            }}
            className={classNames(classes.selectedCandidatesGrid, {}, [className])}
        >
            {candidates.map((candidate) => (
                <CandidatePreviewCard
                    handleCandidateDelete={handleCandidateDelete}
                    key={candidate.id}
                    candidate={candidate}
                />
            ))}
        </div>
    );
});
