import classes from '../ui/Text.module.scss';
import { HeaderTagType, TextAlign, TextSize, TextVariant } from './Text.types';

export const alignsMapper: Record<TextAlign, string> = {
    center: classes.center,
    left: classes.left,
    right: classes.right,
    justify: classes.justify,
};
export const variantsMapper: Record<TextVariant, string> = {
    primary: classes.primary,
    error: classes.error,
    warning: classes.warning,
};

export const sizeMapper: Record<TextSize, string> = {
    large: classes.large,
    medium: classes.medium,
    small: classes.small,
    extrasmall: classes.extrasmall,
};

export const headerTagMapper: Record<TextSize, HeaderTagType> = {
    large: 'h1',
    medium: 'h2',
    small: 'h3',
    extrasmall: 'h4',
};
