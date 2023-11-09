import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    autoFocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const { value, onChange, type = 'text', autoFocus, readonly, ...otherProps } = props;

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={ref}
            value={value || ''}
            onChange={onChangeHandler}
            className={classes.Input}
            type={type}
            readOnly={readonly}
            {...otherProps}
        />
    );
});
