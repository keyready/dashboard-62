import { buttonSizes, buttonVariants } from './button.types';
import classes from '../ui/Button.module.scss';

export const variantsMapper: Record<buttonVariants, string> = {
    primary: classes.primary,
    inverted: classes.inverted,
    clear: classes.clear,
    danger: classes.danger,
    success: classes.success,
    warning: classes.warning,
    outlined: classes.outlined,
};

export const sizesMapper: Record<buttonSizes, string> = {
    small: classes.small,
    medium: classes.medium,
    large: classes.large,
};
