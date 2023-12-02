import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { MultiSelect as PMultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { HStack } from 'shared/UI/Stack';
import classes from './MultiSelect.module.scss';

interface MultiSelectProps {
    className?: string;
    placeholder?: string;
    selected: { title: string; id: number }[];
    onChange: (value: { title: string; id: number }[]) => void;
    data?: any[];
}

export const MultiSelect = memo((props: MultiSelectProps) => {
    const { className, placeholder, selected, onChange, data } = props;

    const handleValueChange = useCallback(
        (event: MultiSelectChangeEvent) => {
            onChange(event.value);
        },
        [onChange],
    );

    return (
        <HStack maxW className={classNames(classes.MultiSelect, {}, [className])}>
            <PMultiSelect
                emptyMessage="Ничего не найдено"
                emptyFilterMessage="Ничего не найдено"
                filter
                value={selected}
                onChange={handleValueChange}
                options={data}
                display="chip"
                optionLabel="title"
                placeholder={placeholder}
                maxSelectedLabels={10}
            />
        </HStack>
    );
});
