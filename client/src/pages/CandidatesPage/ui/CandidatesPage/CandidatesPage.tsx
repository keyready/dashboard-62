import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect, useState } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Checkbox } from 'primereact/checkbox';
import { Table, TableData } from 'shared/UI/Table';
import { HStack, VStack } from 'shared/UI/Stack';
import { Button } from 'shared/UI/Button';
import { Card } from 'shared/UI/Card';
import { Text } from 'shared/UI/Text';
import { Disclosure } from 'shared/UI/Disclosure';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { useSearchParams } from 'react-router-dom';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import { CandidatesPageReducer } from '../../model/slice/CandidatesPageSlice';
import classes from './CandidatesPage.module.scss';

interface CandidatesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    candidates: CandidatesPageReducer,
};

const data: TableData[] = [
    {
        id: 0,
        name: 'Родион',
        HES: 'ВКА',
        speciality: 'Создание защищенного ПО',
        age: '20',
        hobby: 'Frontend-разработка',
    },
    {
        id: 1,
        name: 'Димка',
        HES: 'ВКА',
        speciality: 'Создание защищенного ПО',
        age: '20',
        hobby: 'UI/UX дизайнер',
    },
    {
        id: 2,
        name: 'Валя',
        HES: 'ВКА',
        speciality: 'Создание защищенного ПО',
        age: '20',
        hobby: 'Backend-разработка',
    },
    {
        id: 3,
        name: 'Миша',
        HES: 'Политех имени Петра Великого',
        speciality: 'Что-то там с процессорами',
        age: '20',
        hobby: 'Cybersport',
    },
    {
        id: 4,
        name: 'Вася',
        HES: 'Московский государственный университет',
        speciality: 'Информатика',
        age: '21',
        hobby: 'Чтение',
    },
    {
        id: 5,
        name: 'Петя',
        HES: 'Санкт-Петербургский государственный университет',
        speciality: 'Математика',
        age: '22',
        hobby: 'Футбол',
    },
    {
        id: 6,
        name: 'Света',
        HES: 'Новосибирский государственный университет',
        speciality: 'Физика',
        age: '23',
        hobby: 'Кино',
    },
    {
        id: 7,
        name: 'Иван',
        HES: 'Политех имени Петра Великого',
        speciality: 'Что-то там с процессорами',
        age: '24',
        hobby: 'Cybersport',
    },
    {
        id: 8,
        name: 'Анна',
        HES: 'Московский государственный университет',
        speciality: 'Информатика',
        age: '25',
        hobby: 'Чтение',
    },
    {
        id: 9,
        name: 'Дмитрий',
        HES: 'Санкт-Петербургский государственный университет',
        speciality: 'Математика',
        age: '26',
        hobby: 'Футбол',
    },
    {
        id: 10,
        name: 'Елена',
        HES: 'Новосибирский государственный университет',
        speciality: 'Физика',
        age: '27',
        hobby: 'Кино',
    },
    {
        id: 11,
        name: 'Александр',
        HES: 'Политех имени Петра Великого',
        speciality: 'Что-то там с процессорами',
        age: '28',
        hobby: 'Cybersport',
    },
    {
        id: 12,
        name: 'София',
        HES: 'Московский государственный университет',
        speciality: 'Информатика',
        age: '29',
        hobby: 'Чтение',
    },
    {
        id: 13,
        name: 'Никита',
        HES: 'Санкт-Петербургский государственный университет',
        speciality: 'Математика',
        age: '30',
        hobby: 'Футбол',
    },
    {
        id: 14,
        name: 'Алексей',
        HES: 'Новосибирский государственный университет',
        speciality: 'Физика',
        age: '31',
        hobby: 'Кино',
    },
    {
        id: 15,
        name: 'Даша',
        HES: 'Политех имени Петра Великого',
        speciality: 'Что-то там с процессорами',
        age: '32',
        hobby: 'Cybersport',
    },
    {
        id: 16,
        name: 'Маша',
        HES: 'Московский государственный университет',
        speciality: 'Информатика',
        age: '33',
        hobby: 'Чтение',
    },
    {
        id: 17,
        name: 'Владимир',
        HES: 'Санкт-Петербургский государственный университет',
        speciality: 'Математика',
        age: '34',
        hobby: 'Футбол',
    },
];

const CandidatesPage = memo((props: CandidatesPageProps) => {
    const { className } = props;

    const { addSearchParams, deleteSearchParams, getSearchParams } = useURLParams();

    const [selected, setSelected] = useState<TableData[]>([]);
    const [selectedIdsFromUrl, setSelectedIdsFromUrl] = useState<number[]>([]);

    useEffect(() => {
        const params = getSearchParams();
        if (params.length) {
            setSelectedIdsFromUrl(params[0].value.split(',').map(Number));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setSelected(data.filter((user) => selectedIdsFromUrl.includes(user.id)));
    }, [selectedIdsFromUrl]);

    useEffect(() => {
        if (selected.length) {
            addSearchParams({
                selected: selected.map((user) => user.id.toString()).join(','),
            });
        }
    }, [selected]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(classes.CandidatesPage, {}, [className])}>
                <HStack justify="start">
                    <Card className={classes.card}>
                        <Text
                            align="left"
                            size="large"
                            className={classes.textBlock}
                            title="Сравнение выпускников"
                        />
                    </Card>
                </HStack>

                <HStack className={classes.deleteBtn} maxW justify="end">
                    <Button
                        size="small"
                        variant="danger"
                        disabled={!selected.length}
                        onClick={() => {
                            setSelected([]);
                            deleteSearchParams('selected');
                        }}
                    >
                        Очистить выбор
                    </Button>
                </HStack>

                <Splitter className={classes.contentWrapper}>
                    <SplitterPanel size={40} className={classes.accordion}>
                        <Disclosure
                            titles={data.map((user) => (
                                <HStack maxW justify="start" gap="16" key={user.id}>
                                    <Checkbox
                                        onChange={(event) => {
                                            event.stopPropagation();
                                            if (selected.includes(user)) {
                                                setSelected((prev) =>
                                                    prev.filter((item) => item !== user),
                                                );
                                                return;
                                            }
                                            setSelected((prev) => [...prev, user]);
                                        }}
                                        checked={selected.includes(user)}
                                    />
                                    <div className={classes.img} />
                                    <Text
                                        className={classes.textBlock}
                                        size="extrasmall"
                                        title={user.name}
                                    />
                                </HStack>
                            ))}
                            paragraphs={data.map((user) => (
                                <VStack maxW gap="0" key={user.name}>
                                    <HStack maxW>
                                        <b>Возраст:</b>
                                        <p>{user.age}</p>
                                    </HStack>
                                    <HStack maxW>
                                        <b>ВУЗ:</b>
                                        <p>{user.HES}</p>
                                    </HStack>
                                    <HStack maxW>
                                        <b>Специальность:</b>
                                        <p>{user.speciality}</p>
                                    </HStack>
                                    <HStack maxW>
                                        <b>Хобби:</b>
                                        <p>{user.hobby}</p>
                                    </HStack>
                                </VStack>
                            ))}
                        />
                    </SplitterPanel>

                    <SplitterPanel size={60} className={classes.tableWrapper}>
                        <Table data={selected} />
                    </SplitterPanel>
                </Splitter>
            </Page>
        </DynamicModuleLoader>
    );
});

export default CandidatesPage;
