import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import { Modal } from 'shared/UI/Modal';
import { CandidatesDisclosure } from 'widgets/CandidatesDisclosure';
import { Button } from 'shared/UI/Button';
import { HStack } from 'shared/UI/Stack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { defineCandidateFolder } from 'entities/Candidate';
import classes from './AddParticipantsModal.module.scss';

interface AddParticipantsModalProps {
    className?: string;
    folderId?: number;
    open: boolean;
    setOpen: (open: boolean) => void;
    setWasDefined: (wasDefined: boolean) => void;
}

export const AddParticipantsModal = memo((props: AddParticipantsModalProps) => {
    const { className, open, setOpen, folderId, setWasDefined } = props;

    const dispatch = useAppDispatch();

    const handleCandidatesAdd = useCallback(async () => {
        const result = await dispatch(
            defineCandidateFolder({
                folderId: folderId || -1,
                candidateIds: [],
            }),
        );

        if (result.meta.requestStatus === 'fulfilled') {
            setWasDefined(true);
            setOpen(false);
        }
    }, [dispatch, folderId, setOpen, setWasDefined]);

    return (
        <Modal
            isOpen={open}
            setIsOpen={setOpen}
            className={classNames(classes.AddParticipantsModal, {}, [className])}
        >
            <CandidatesDisclosure
                className={classes.disclosure}
                limit={10000}
                page={0}
                defaultSelected={[]}
                filterOptions={{ folderId }}
                setSelectedProps={() => {}}
            />

            <HStack justify="end" maxW className={classes.btnWrapper}>
                <Button onClick={handleCandidatesAdd}>Добавить</Button>
            </HStack>
        </Modal>
    );
});
