import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { variantsMapper } from '../types/button.mapper';
import { buttonVariants } from '../types/button.types';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    children?: ReactNode;
    variant?: buttonVariants;
}

export const Button = memo((props: ButtonProps) => {
    const { onClick, className, children, disabled, variant = 'primary', ...otherProps } = props;

    const add = [variantsMapper[variant], className];

    return (
        <button
            className={classNames(classes.Button, { [classes.disabled]: disabled }, add)}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
