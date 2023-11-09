import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBoxDirections } from 'shared/types/ui';
import { AppLink } from 'shared/UI/AppLink';
import { directionsMapper } from '../../styles/consts';
import popupClasses from '../../styles/popups.module.scss';
import classes from './Dropdown.module.scss';

export interface DropdownItems {
    content?: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: DropdownItems[];
    direction?: ListBoxDirections;
    hover?: boolean;
}

export const Dropdown = (props: DropdownProps) => {
    const { className, trigger, items, direction = 'top left', hover = false } = props;

    const menuClasses = [directionsMapper[direction]];

    const [isShown, setIsShown] = useState<boolean>(false);

    return (
        <Menu
            as="div"
            className={classNames(popupClasses.popup, {}, [className])}
            onMouseLeave={() => setIsShown(false)}
        >
            {hover ? (
                <div onMouseEnter={() => setIsShown(true)}>{trigger}</div>
            ) : (
                <Menu.Button className={popupClasses.trigger}>{trigger}</Menu.Button>
            )}

            <Transition
                enter={popupClasses.enter}
                enterFrom={popupClasses.enterFrom}
                enterTo={popupClasses.enterTo}
                leave={popupClasses.leave}
                leaveFrom={popupClasses.leaveFrom}
                leaveTo={popupClasses.leaveTo}
                show={isShown}
            >
                <Menu.Items
                    onMouseLeave={() => setIsShown(false)}
                    static={hover ? isShown : false}
                    className={classNames(classes.items, {}, menuClasses)}
                >
                    {items.map((item, index) => {
                        const content = ({ active }: { active: boolean }) => (
                            <button
                                className={classNames(classes.item, {
                                    [popupClasses.active]: active,
                                })}
                                type="button"
                                onClick={item.onClick}
                                disabled={item.disabled}
                            >
                                {item.content}
                            </button>
                        );

                        if (item.href) {
                            return (
                                <Menu.Item
                                    className={classes.link}
                                    key={item.content}
                                    as={AppLink}
                                    to={item.href}
                                    disabled={item.disabled}
                                >
                                    <AppLink to={item.href}>{item.content}</AppLink>
                                </Menu.Item>
                            );
                        }

                        return (
                            <Menu.Item key={item.content} as={Fragment} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
