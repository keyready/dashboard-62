import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import { HStack } from 'shared/UI/Stack';
import { variantsMapper, sizesMapper } from '../types/button.mapper';
import { buttonSizes, buttonVariants } from '../types/button.types';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    children?: ReactNode;
    variant?: buttonVariants;
    size?: buttonSizes;
    isLoading?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        onClick,
        className,
        children,
        disabled,
        size = 'medium',
        variant = 'primary',
        isLoading,
        ...otherProps
    } = props;

    const add = [sizesMapper[size], variantsMapper[variant], className];

    return (
        <button
            className={classNames(classes.Button, { [classes.disabled]: disabled }, add)}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}
        >
            <HStack maxW justify="start" gap="8">
                {isLoading && (
                    <ProgressSpinner
                        animationDuration="1s"
                        style={{ width: '30px', height: '30px' }}
                    />
                )}
                {children}
            </HStack>
        </button>
    );
});
