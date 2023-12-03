import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, memo, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Text } from 'shared/UI/Text';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    title?: string;
    children: ReactNode;
}

export const Modal = memo((props: ModalProps) => {
    const { className, isOpen, setIsOpen, title, children } = props;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog className={classes.Modal} open={isOpen} onClose={() => setIsOpen(false)}>
                <Transition.Child
                    enter={classes.enter}
                    enterFrom={classes.enterFrom}
                    enterTo={classes.enterTo}
                    leave={classes.leave}
                    leaveFrom={classes.leaveFrom}
                    leaveTo={classes.leaveTo}
                    as={Fragment}
                >
                    <div className={classes.overlay} />
                </Transition.Child>

                <Transition.Child
                    enter={classes.enter}
                    enterFrom={classes.enterFrom}
                    enterTo={classes.enterTo}
                    leave={classes.leave}
                    leaveFrom={classes.leaveFrom}
                    leaveTo={classes.leaveTo}
                    as={Fragment}
                >
                    <div className={classes.content}>
                        <Dialog.Panel className={classNames(classes.Panel, {}, [className])}>
                            <Text className={classes.title} title={title} size="large" />

                            {children}
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
});
