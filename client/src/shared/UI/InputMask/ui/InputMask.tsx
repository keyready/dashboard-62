import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { InputMask as PInputMask, InputMaskChangeEvent } from 'primereact/inputmask';

import { HStack } from 'shared/UI/Stack';
import classes from './InputMask.module.scss';

interface InputMaskProps {
    className?: string;
    value: string;
    setValue: (value: string) => void;
    mask?: string;
    placeholder?: string;
    required?: boolean;
}

export const InputMask = memo((props: InputMaskProps) => {
    const { className, setValue, value, mask, placeholder, required } = props;

    const handleValueChange = useCallback(
        (event: InputMaskChangeEvent) => {
            const { value } = event.target;
            if (value) setValue(value);
        },
        [setValue],
    );

    return (
        <HStack maxW className={classNames(classes.InputMask, {}, [className])}>
            <PInputMask
                required={required}
                style={{ width: '100%' }}
                value={value}
                onChange={handleValueChange}
                mask={mask || '99-999999'}
                placeholder={placeholder || '99-999999'}
            />
        </HStack>
    );
});
