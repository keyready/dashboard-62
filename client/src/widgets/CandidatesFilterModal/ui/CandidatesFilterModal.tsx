import React, { memo, useCallback, useState } from 'react';
import { Modal } from 'shared/UI/Modal';
import { Tree } from 'widgets/Tree';
import { Button } from 'shared/UI/Button';
import { HStack, VStack } from 'shared/UI/Stack';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import classes from './CandidatesFilterModal.module.scss';

export interface FilterOptions {
    age: [number, number];
    education: string[];
}

interface CandidatesFilterModalProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    filterOptions: FilterOptions;
    setFilterOptions: (options: FilterOptions) => void;
}

export const CandidatesFilterModal = memo((props: CandidatesFilterModalProps) => {
    const { isOpen, setIsOpen, filterOptions, setFilterOptions } = props;

    const [localOptions, setLocalOptions] = useState<FilterOptions>(filterOptions);

    const { addSearchParams, deleteSearchParams } = useURLParams();

    const handleAgeRangeChange = useCallback(
        (event: SliderChangeEvent) => {
            setLocalOptions({ ...filterOptions, age: event.value as [number, number] });
        },
        [filterOptions],
    );

    const handleEducationChange = useCallback(
        (value: string[]) => {
            setLocalOptions({ ...filterOptions, education: value });
        },
        [filterOptions],
    );

    const handleApplyOptions = useCallback(() => {
        setFilterOptions(localOptions);
        addSearchParams({
            education: localOptions.education.join(','),
            age: localOptions.age.join(','),
        });
        setIsOpen(false);
    }, [localOptions, setFilterOptions, setIsOpen]);

    const handleClearOptions = useCallback(() => {
        setFilterOptions({
            age: [18, 40],
            education: [],
        });
        deleteSearchParams('age');
        deleteSearchParams('education');
        setIsOpen(false);
    }, [setIsOpen, setFilterOptions]);

    return (
        <Modal
            className={classes.modal}
            title="Поиск по параметрам"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <VStack maxW className={classes.wrapper}>
                <HStack maxW align="start" gap="16">
                    <h3 style={{ margin: 0, textAlign: 'left' }}>Факультет, кафедра:</h3>
                    <Tree
                        selectedParams={localOptions.education}
                        setSelectedParams={handleEducationChange}
                    />
                </HStack>

                <HStack maxW gap="16">
                    <h3 style={{ margin: 0 }}>Возраст:</h3>
                    <HStack className={classes.sliderWrapper} maxW gap="16">
                        <p>{localOptions.age[0]}</p>
                        <div style={{ width: '100%' }}>
                            <Slider
                                min={18}
                                max={40}
                                value={localOptions.age}
                                onChange={handleAgeRangeChange}
                                range
                            />
                        </div>
                        <p>{localOptions.age[1]}</p>
                    </HStack>
                </HStack>

                <HStack maxW gap="16">
                    <Button onClick={handleApplyOptions}>Поиск</Button>
                    <Button variant="danger" onClick={handleClearOptions}>
                        Очистить фильтры
                    </Button>
                </HStack>
            </VStack>
        </Modal>
    );
});
