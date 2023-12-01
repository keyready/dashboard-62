import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { HStack } from 'shared/UI/Stack';
import { ChipsChangeEvent, Chips as PChips } from 'primereact/chips';
import classes from './Chips.module.scss';

interface ChipsProps {
    className?: string;
    chips: string[];
    setChips: (newChips: string[]) => void;
    placeholder?: string;
    required?: boolean;
}

export const Chips = memo((props: ChipsProps) => {
    const { className, chips, setChips, placeholder, required } = props;

    const handleChipChange = useCallback(
        (e: ChipsChangeEvent) => {
            setChips(e.value as string[]);
        },
        [setChips],
    );

    return (
        <HStack maxW className={classNames(classes.Chips, {}, [className])}>
            <PChips
                required={required}
                style={{ width: '100% !important' }}
                placeholder={placeholder}
                value={chips}
                onChange={handleChipChange}
            />
        </HStack>
    );
});
