import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useState } from 'react';
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
        name: 'Родион',
        HES: 'ВКА',
        speciality: 'Создание защищенного ПО',
        age: '20',
        hobby: 'Frontend-разработка',
    },
    {
        name: 'Димка',
        HES: 'ВКА',
        speciality: 'Создание защищенного ПО',
        age: '20',
        hobby: 'UI/UX дизайнер',
    },
    {
        name: 'Валя',
        HES: 'ВКА',
        speciality: 'Создание защищенного ПО',
        age: '20',
        hobby: 'Backend-разработка',
    },
    {
        name: 'Миша',
        HES: 'Политех имени Петра Великого',
        speciality: 'Что-то там с процессорами',
        age: '20',
        hobby: 'Cybersport',
    },
    {
        name: 'Вася',
        HES: 'Московский государственный университет',
        speciality: 'Информатика',
        age: '21',
        hobby: 'Чтение',
    },
    {
        name: 'Петя',
        HES: 'Санкт-Петербургский государственный университет',
        speciality: 'Математика',
        age: '22',
        hobby: 'Футбол',
    },
    {
        name: 'Света',
        HES: 'Новосибирский государственный университет',
        speciality: 'Физика',
        age: '23',
        hobby: 'Кино',
    },
    {
        name: 'Иван',
        HES: 'Политех имени Петра Великого',
        speciality: 'Что-то там с процессорами',
        age: '24',
        hobby: 'Cybersport',
    },
    {
        name: 'Анна',
        HES: 'Московский государственный университет',
        speciality: 'Информатика',
        age: '25',
        hobby: 'Чтение',
    },
    {
        name: 'Дмитрий',
        HES: 'Санкт-Петербургский государственный университет',
        speciality: 'Математика',
        age: '26',
        hobby: 'Футбол',
    },
    {
        name: 'Елена',
        HES: 'Новосибирский государственный университет',
        speciality: 'Физика',
        age: '27',
        hobby: 'Кино',
    },
    {
        name: 'Александр',
        HES: 'Политех имени Петра Великого',
        speciality: 'Что-то там с процессорами',
        age: '28',
        hobby: 'Cybersport',
    },
    {
        name: 'София',
        HES: 'Московский государственный университет',
        speciality: 'Информатика',
        age: '29',
        hobby: 'Чтение',
    },
    {
        name: 'Никита',
        HES: 'Санкт-Петербургский государственный университет',
        speciality: 'Математика',
        age: '30',
        hobby: 'Футбол',
    },
    {
        name: 'Алексей',
        HES: 'Новосибирский государственный университет',
        speciality: 'Физика',
        age: '31',
        hobby: 'Кино',
    },
    {
        name: 'Даша',
        HES: 'Политех имени Петра Великого',
        speciality: 'Что-то там с процессорами',
        age: '32',
        hobby: 'Cybersport',
    },
    {
        name: 'Маша',
        HES: 'Московский государственный университет',
        speciality: 'Информатика',
        age: '33',
        hobby: 'Чтение',
    },
    {
        name: 'Владимир',
        HES: 'Санкт-Петербургский государственный университет',
        speciality: 'Математика',
        age: '34',
        hobby: 'Футбол',
    },
];

const CandidatesPage = memo((props: CandidatesPageProps) => {
    const { className } = props;

    const [selected, setSelected] = useState<TableData[]>([]);

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
                        }}
                    >
                        Очистить выбор
                    </Button>
                </HStack>

                <Splitter className={classes.contentWrapper}>
                    <SplitterPanel size={40} className={classes.accordion}>
                        <Disclosure
                            titles={data.map((user) => (
                                <HStack maxW justify="start" gap="16" key={user.name}>
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
