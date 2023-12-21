import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useRef } from 'react';
import { VStack } from 'shared/UI/Stack';
import { Text } from 'shared/UI/Text';
import { MenuItem, MenuItemCommandEvent } from 'primereact/menuitem';
import { ContextMenu } from 'primereact/contextmenu';
import { Tooltip } from 'primereact/tooltip';
import { TrashIcon } from '@radix-ui/react-icons';
import classes from './CandidatePreviewCard.module.scss';
import { Candidate } from '../../model/types/Candidate';

interface CandidatePreviewCardProps {
    className?: string;
    candidate: Candidate;
    handleCandidateDelete?: (candidateId: number) => void;
}

export const CandidatePreviewCard = memo((props: CandidatePreviewCardProps) => {
    const { className, candidate, handleCandidateDelete } = props;

    const cm = useRef<ContextMenu>(null);

    const items: MenuItem[] = useMemo(
        () => [
            {
                label: 'Удалить из группы',
                icon: <TrashIcon className={classes.icon} />,
                command(event: MenuItemCommandEvent) {
                    event.originalEvent.preventDefault();
                    handleCandidateDelete?.(candidate.id);
                },
            },
        ],
        [candidate.id, handleCandidateDelete],
    );

    return (
        <VStack
            onContextMenu={(e) => cm.current?.show(e)}
            align="center"
            maxW
            className={classNames(classes.candCard, {}, [className])}
        >
            <ContextMenu model={items} ref={cm} />
            <Tooltip showDelay={300} mouseTrack mouseTrackLeft={10} target=".tooltip-preview">
                <span>Нажмите ПКМ для дополнительных действий</span>
            </Tooltip>

            <img
                src={`../${candidate.img}`}
                alt={candidate.lastname}
                className={classNames(classes.img, {}, ['tooltip-preview'])}
            />
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
