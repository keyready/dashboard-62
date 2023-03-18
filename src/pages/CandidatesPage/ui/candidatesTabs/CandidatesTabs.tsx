import { ChangeEvent, memo, useCallback } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Candidate } from 'entities/Candidate';
import { Disclosure } from '@headlessui/react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Avatar } from 'shared/UI/Avatar/Avatar';
import ArrowIcon from 'shared/assests/icons/arrow.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/UI/Loader';
import classes from './CandidateTabs.module.scss';

interface CandidateTabsProps {
    className?: string;
    candidate: Candidate;
    setSelectedId?: (id: number) => void;
    isLoading?: boolean
}

export const CandidateTabs = memo((props: CandidateTabsProps) => {
    const {
        className,
        candidate,
        setSelectedId,
        isLoading,
    } = props;

    const { theme } = useTheme();

    const randomInteger = useCallback((min: number, max: number) => {
        const rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }, []);

    const checkboxHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();

        if (e.target.id) {
            setSelectedId?.(e.target.id as unknown as number);
        }
    }, [setSelectedId]);

    // TODO: лоадер должен работать!
    if (isLoading) {
        console.log('загрзука');
        return (
            <div className={classes.loaderCard}>
                <Loader />
            </div>
        );
    }

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        as={Button}
                        variant={theme === Theme.LIGHT ? 'info' : 'dark'}
                        className={classes.accordionButton}
                    >
                        <Form
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Form.Check
                                type="checkbox"
                                id={candidate.id ? candidate.id.toString() : ''}
                                onChange={checkboxHandler}
                            />
                        </Form>
                        <div className={classes.infoWrapper}>
                            {!open && (
                                <Avatar
                                    alt={`${candidate.lastname} ${candidate.firstname}`}
                                    size={35}
                                    src={`https://i.pravatar.cc/${randomInteger(1, 1000)}`}
                                />
                            )}
                            <p className={classes.names}>
                                {`${candidate.lastname} ${candidate.firstname}`}
                            </p>
                        </div>
                        <ArrowIcon
                            className={classNames(
                                classes.icon,
                                { [classes.open]: open },
                            )}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel
                        as={Card}
                        bg={theme === Theme.LIGHT ? 'info' : 'dark'}
                        className={classes.accordionBody}
                    >
                        <Avatar
                            alt={`${candidate.lastname} ${candidate.firstname}`}
                            size={75}
                            src={`https://i.pravatar.cc/${randomInteger(1, 1000)}`}
                        />
                        <div className={classes.info}>
                            <p>{`Возраст: ${candidate.age}`}</p>
                            <p>{`Образование: ${candidate.education}`}</p>
                            <p>{`Специальность: ${candidate.speciality}`}</p>
                            <p>{`Опыт работы: ${candidate.experience}`}</p>
                            <p>О себе: lorem10</p>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
});
