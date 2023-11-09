import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import classes from './Card.module.scss';

interface CardProps {
    className?: string;
    children?: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div className={classNames(classes.Card, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
});
