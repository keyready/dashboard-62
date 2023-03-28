import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import StarIcon from 'shared/assests/icons/star.svg';
import classes from './CandidateCard.module.scss';
import { Candidate } from '../model/types/Candidate';

export type CardStyle = 'winner' | 'awardeeF' | 'awardeeS' | 'awardeeTh'

interface CandidateCardProps {
    className?: string;
    candidate?: Candidate;
    totalScore?: number;
    cardStyle?: CardStyle;
}

const numbers = [1, 2, 3, 4, 5];

export const CandidateCard = memo((props: CandidateCardProps) => {
    const {
        className,
        candidate,
        totalScore,
        cardStyle = 'winner',
    } = props;

    const cardStyleMapper: Record<CardStyle, string> = {
        winner: classes.winner,
        awardeeF: classes.awardeeF,
        awardeeS: classes.awardeeS,
        awardeeTh: classes.awardeeTh,
    };

    const cardClasses = cardStyleMapper[cardStyle];

    const scoreTransformer = useCallback((number?: number) => {
        if (!number) return 0;
        return Math.round((number / 10) * 5);
    }, []);

    return (
        <div className={classNames(classes.CandidateCard, {}, [className, cardClasses])}>
            <img
                className={classes.img}
                // src={candidate?.img}
                src="https://i.pravatar.cc/300"
                alt={`${candidate?.lastname}`}
            />
            <h2>{candidate?.lastname}</h2>
            <h4>{`${candidate?.firstname} ${candidate?.middlename}`}</h4>
            <h3>{`Общий балл: ${totalScore}`}</h3>
            <div className={classes.stars}>
                {numbers.map((number) => (
                    <StarIcon
                        key={number}
                        className={classNames(
                            classes.starIcon,
                            { [classes.filledStar]: number <= scoreTransformer(totalScore) },
                            [],
                        )}
                    />
                ))}
            </div>
        </div>
    );
});
