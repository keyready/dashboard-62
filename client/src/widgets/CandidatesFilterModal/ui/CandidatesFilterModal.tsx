import React, { memo, useEffect, useState } from 'react';
import { Modal } from 'shared/UI/Modal';
import { Tree } from 'widgets/Tree';
import { Button } from 'shared/UI/Button';
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

    const [selectedParams, setSelectedParams] = useState<string[]>([]);

    return (
        <Modal
            className={classes.modal}
            title="Поиск по параметрам"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <h2>Тут мы будем параметры туа сюла</h2>

            <Tree selectedParams={selectedParams} setSelectedParams={setSelectedParams} />

            <Button
                onClick={async () => {
                    fetch('http://localhost:9999/api/filter_candidates', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(selectedParams),
                    });
                }}
            >
                Поиск
            </Button>
        </Modal>
    );
});
