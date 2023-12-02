import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { VStack } from 'shared/UI/Stack';
import { Text } from 'shared/UI/Text';
import classes from './CandidatePreviewCard.module.scss';
import { Candidate } from '../../model/types/Candidate';

interface CandidatePreviewCardProps {
    className?: string;
    candidate: Candidate;
    handleCandidateDelete?: (candidateId: number) => void;
}

export const CandidatePreviewCard = memo((props: CandidatePreviewCardProps) => {
    const { className, candidate, handleCandidateDelete } = props;

    return (
        <VStack
            onClick={() => handleCandidateDelete?.(candidate.id)}
            align="center"
            maxW
            className={classNames(classes.candCard, {}, [className])}
        >
            <img src={candidate.img} alt={candidate.lastname} className={classes.img} />
            <VStack maxW align="center">
                <Text title={candidate.lastname} size="small" align="center" />
                <Text
                    size="small"
                    text={`${candidate.firstname} ${candidate.middlename}`}
                    align="center"
                />
            </VStack>
        </VStack>
    );
});
