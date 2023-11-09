import { ListBoxDirections } from 'shared/types/ui';
import classes from './popups.module.scss';

export const directionsMapper: Record<ListBoxDirections, string> = {
    'bottom left': classes.directionBottomLeft,
    'top left': classes.directionsTopLeft,
    'bottom right': classes.directionBottomRight,
    'top right': classes.directionsTopRight,
};
