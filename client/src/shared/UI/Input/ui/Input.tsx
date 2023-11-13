import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import { HStack } from 'shared/UI/Stack';
import { Icon } from 'shared/UI/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
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
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Input = memo((props: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const {
        className,
        icon,
        value,
        onChange,
        type = 'text',
        autoFocus,
        readonly,
        ...otherProps
    } = props;

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <HStack
            gap="8"
            maxW
            justify="start"
            className={classNames(classes.wrapper, {}, [className])}
        >
            {icon && <Icon Svg={icon} />}
            <input
                ref={ref}
                value={value || ''}
                onChange={onChangeHandler}
                className={classNames(classes.Input, { [classes.active]: value !== '' })}
                type={type}
                readOnly={readonly}
                {...otherProps}
            />
        </HStack>
    );
});
