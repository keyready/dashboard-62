import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import ExpandIcon from 'shared/assets/icons/expand_arrow.svg';
import { ListBoxDirections } from 'shared/types/ui';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button';
import { directionsMapper } from '../../styles/consts';
import classes from './ListBox.module.scss';
import popupClasses from '../../styles/popups.module.scss';

export interface ListBoxItems {
    value?: string;
    content?: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items: ListBoxItems[];
    className?: string;
    onChange: (value: string) => void;
    value?: string;
    defaultValue?: string;
    direction?: ListBoxDirections;
}

export const ListBox = (props: ListBoxProps) => {
    const { className, items, defaultValue, value, onChange, direction = 'bottom left' } = props;

    const directionsClasses = [directionsMapper[direction]];

    return (
        <HListBox
            as="div"
            className={classNames(popupClasses.popup, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <HListBox.Button as={Fragment}>
                <Button variant="outlined">
                    <HStack justify="between" gap="4">
                        {value || defaultValue}
                        <ExpandIcon width={25} height={25} />
                    </HStack>
                </Button>
            </HListBox.Button>
            <HListBox.Options className={classNames(classes.options, {}, directionsClasses)}>
                {items.map((item) => (
                    <HListBox.Option
                        key={item.value}
                        as={Fragment}
                        value={item.value}
                        disabled={item.disabled}
                    >
                        {({ active, selected, disabled }) => (
                            <li
                                className={classNames(
                                    classes.item,
                                    {
                                        [popupClasses.active]: active,
                                        [classes.selected]: selected,
                                        [popupClasses.disabled]: disabled,
                                    },
                                    [],
                                )}
                            >
                                <HStack gap="4" justify="start">
                                    {active && <ExpandIcon className={classes.icon} />}
                                    {item.content}
                                </HStack>
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
};
