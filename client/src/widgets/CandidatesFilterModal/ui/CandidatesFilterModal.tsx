import React, { memo } from 'react';
import { Modal } from 'shared/UI/Modal';
import { Tree } from 'widgets/Tree';
import classes from './CandidatesFilterModal.module.scss';

export interface FilterOptions {
    age?: number;
    department?: string;
    HES?: string;
    faculty?: number;
}

interface CandidatesFilterModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    filterOptions: FilterOptions;
}

export const CandidatesFilterModal = memo((props: CandidatesFilterModalProps) => {
    const { isOpen, setIsOpen, filterOptions } = props;

    return (
        <Modal
            className={classes.modal}
            title="Поиск по параметрам"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <h2>Тут мы будем параметры туа сюла</h2>

            <Tree />
        </Modal>
    );
});
