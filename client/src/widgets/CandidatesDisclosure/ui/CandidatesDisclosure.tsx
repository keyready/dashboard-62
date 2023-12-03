import React, { memo, useEffect, useState } from 'react';
import { HStack, VStack } from 'shared/UI/Stack';
import { Checkbox } from 'primereact/checkbox';
import { Text } from 'shared/UI/Text';
import { Disclosure } from 'shared/UI/Disclosure';
import { useCandidates } from 'pages/CandidatesPage';
import { FilterOptions } from 'widgets/CandidatesFilterModal';
import { Candidate } from 'entities/Candidate';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CandidatesDisclosure.module.scss';

interface CandidatesDisclosureProps {
    className?: string;
    page?: number;
    limit?: number;
    filterOptions?: any;
    defaultSelected: Candidate[];
    setSelectedProps: (selected: Candidate[]) => void;
}

export const CandidatesDisclosure = memo((props: CandidatesDisclosureProps) => {
    const {
        className,
        filterOptions = { age: [18, 40], education: [] },
        limit = 10000,
        page = 0,
        defaultSelected,
        setSelectedProps,
    } = props;

    const [selected, setSelected] = useState<Candidate[]>(defaultSelected);

    useEffect(() => {
        setSelectedProps(selected);
    }, [selected, setSelectedProps]);

    useEffect(() => {
        setSelected(defaultSelected);
    }, [defaultSelected]);

    const { data: candidates } = useCandidates({
        page,
        limit,
        filterOptions,
    });

    useEffect(() => {
        console.log(filterOptions);
    }, [filterOptions]);

    return (
        <Disclosure
            className={classNames('', {}, [className])}
            titles={
                candidates?.map((candidate) => (
                    <HStack
                        className={classes.disclosureBug}
                        maxW
                        justify="start"
                        gap="16"
                        key={candidate.id}
                    >
                        <Checkbox
                            onChange={(event) => {
                                event.stopPropagation();
                                if (selected.includes(candidate)) {
                                    setSelected((prev) =>
                                        prev.filter((item) => item !== candidate),
                                    );
                                    return;
                                }
                                setSelected((prev) => [...prev, candidate]);
                            }}
                            checked={selected.includes(candidate)}
                        />
                        <img
                            src={candidate.img}
                            title={candidate.lastname}
                            alt={candidate.lastname}
                            className={classes.img}
                        />
                        <Text
                            className={classes.textBlock}
                            size="extrasmall"
                            title={candidate.firstname}
                        />
                    </HStack>
                )) || [<p>ничего</p>]
            }
            paragraphs={
                candidates?.map((user) => (
                    <VStack maxW gap="0" key={user.id}>
                        <HStack maxW>
                            <b>Возраст:</b>
                            <p>{user.age}</p>
                        </HStack>
                        <HStack maxW>
                            <b>Факультет:</b>
                            <p>{user.faculty}</p>
                        </HStack>
                        <HStack maxW>
                            <b>Специальность:</b>
                            <p>{user.department}</p>
                        </HStack>
                        <HStack maxW>
                            <b>Ключевые навыки:</b>
                            <p>{user.keySkills.slice(0, 3).join(', ')}</p>
                        </HStack>
                    </VStack>
                )) || [<p>ничего</p>]
            }
        />
    );
});
