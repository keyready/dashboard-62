import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import classes from './Flex.module.scss';

export type FlexDirection = 'row' | 'column';
export type FlexAlign = 'center' | 'start' | 'end' | 'stretch';
export type FlexJustify = 'center' | 'start' | 'end' | 'between';
export type FlexGap = '4' | '8' | '16' | '32';

const alignClasses: Record<FlexAlign, string> = {
    center: classes.alignCenter,
    stretch: classes.alignStretch,
    end: classes.alignEnd,
    start: classes.alignStart,
};

const justifyClasses: Record<FlexJustify, string> = {
    center: classes.justifyCenter,
    end: classes.justifyEnd,
    start: classes.justifyStart,
    between: classes.justifyBetween,
};

const directionClasses: Record<FlexDirection, string> = {
    column: classes.directionColumn,
    row: classes.directionRow,
};

const gapClasses: Record<FlexGap, string> = {
    4: classes.gap4,
    8: classes.gap8,
    16: classes.gap16,
    32: classes.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children?: ReactNode;
    direction?: FlexDirection;
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: FlexGap;
    maxW?: boolean;
    maxH?: boolean;
    onClick?: () => void;
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        align = 'center',
        justify = 'start',
        direction = 'row',
        gap = '4',
        maxW,
        maxH,
        onClick,
    } = props;

    const mods: Mods = {
        [classes.maxW]: maxW,
        [classes.maxH]: maxH,
    };

    const classesMapper = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gapClasses[gap],
    ];

    return (
        <div onClick={onClick} className={classNames(classes.Flex, mods, classesMapper)}>
            {children}
        </div>
    );
};
