import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { alignsMapper, headerTagMapper, sizeMapper, variantsMapper } from '../types/TextMappers';
import { TextAlign, TextSize, TextVariant } from '../types/Text.types';
import classes from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    align?: TextAlign;
    size?: TextSize;
    variant?: TextVariant;
    onClick?: () => void;
    id?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        align = 'justify',
        size = 'medium',
        variant = 'primary',
        id,
        onClick,
    } = props;

    const variantsClasses = variantsMapper[variant];
    const alignsClasses = alignsMapper[align];
    const sizeClasses = sizeMapper[size];
    const HeaderTag = headerTagMapper[size];

    const add = [className, variantsClasses, alignsClasses, sizeClasses];

    return (
        <div id={id} onClick={onClick} className={classNames(classes.Text, {}, add)}>
            {title && <HeaderTag className={classes.title}>{title}</HeaderTag>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});
