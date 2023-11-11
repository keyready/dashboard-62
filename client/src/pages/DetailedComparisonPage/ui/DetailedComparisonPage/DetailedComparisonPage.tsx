/* eslint-disable guard-for-in,no-restricted-syntax */
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, ReactNode, useEffect, useMemo, useState } from 'react';
import { Chart } from 'primereact/chart';
import { HStack, VStack } from 'shared/UI/Stack';
import { Text } from 'shared/UI/Text';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import { Card as GradientCard } from 'shared/UI/Card';
import StarIcon from 'shared/assests/icons/star-circle.svg';
import { Icon } from 'shared/UI/Icon/Icon';
import { Candidate } from 'entities/Candidate';
import classes from './DetailedComparisonPage.module.scss';
import cardClasses from './card.module.scss';

interface DetailedComparisonPageProps {
    className?: string;
}

const users: Partial<Candidate>[] = [
    {
        id: 0,
        firstname: 'Родион',
        HES: 'ВКА',
        department: 'Создание защищенного ПО',
        age: 20,
        hobby: 'Frontend-разработка',
    },
    {
        id: 1,
        firstname: 'Димка',
        HES: 'ВКА',
        department: 'Создание защищенного ПО',
        age: 20,
        hobby: 'UI/UX дизайнер',
    },
    {
        id: 2,
        firstname: 'Валя',
        HES: 'ВКА',
        department: 'Создание защищенного ПО',
        age: 20,
        hobby: 'Backend-разработка',
    },
];
const score: number = 4.3;

const Card = memo((props: { children: ReactNode; className?: string }) => {
    const { className, children } = props;

    return <div className={classNames(cardClasses.Card, {}, [className])}>{children}</div>;
});

const DetailedComparisonPage = memo((props: DetailedComparisonPageProps) => {
    const { className } = props;

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const { getSearchParams } = useURLParams();

    const task = useMemo(() => getSearchParams()[1].value, []);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointHoverBackgroundColor: 'purple',
                    pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    data: [65, 59, 90, 81, 56, 55, 40],
                },
                {
                    label: 'My Second dataset',
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointHoverBackgroundColor: 'purple',
                    pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [28, 48, 40, 19, 96, 27, 100],
                },
            ],
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: 'red', // цвет легенды
                    },
                },
            },
            scales: {
                r: {
                    grid: {
                        color: 'green', // цвет сетки радара
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <Page className={classNames(classes.ComparisonPage, {}, [className])}>
            <HStack justify="start" className={classes.gradCard}>
                <GradientCard>
                    <Text
                        align="left"
                        size="large"
                        className={classes.textBlock}
                        title={`Задача: ${task}`}
                    />
                </GradientCard>
            </HStack>

            <VStack maxW gap="32">
                <div className={classes.firstLine}>
                    <Card>
                        <h3 className={classes.title}>Специалисты</h3>
                        <VStack maxW align="start">
                            {users.map((user) => (
                                <HStack maxW align="center" justify="start" gap="8" key={user.id}>
                                    <div
                                        style={{
                                            width: 100,
                                            height: 100,
                                            backgroundColor: 'red',
                                            borderRadius: 10,
                                        }}
                                    />
                                    <div>
                                        <Text
                                            text={`${user.lastname} ${user.firstname}`}
                                            size="extrasmall"
                                        />
                                        <Text text={user.middlename} size="extrasmall" />
                                    </div>
                                </HStack>
                            ))}
                        </VStack>
                    </Card>
                    <Card className={classes.card}>
                        <VStack maxW align="center" justify="start">
                            <h3 className={classes.title}>Сравнение основных параметров</h3>
                            <Chart
                                className={classes.radar}
                                type="radar"
                                data={chartData}
                                options={chartOptions}
                            />
                        </VStack>
                    </Card>
                </div>

                <div className={classes.secondLine}>
                    <Card>
                        <h3 className={classes.title}>Опыт работы</h3>
                    </Card>
                    <Card>
                        <h3 className={classes.title}>Лучший</h3>

                        <VStack maxW align="center" className={classes.best}>
                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: 'red',
                                    borderRadius: 10,
                                }}
                            />
                            <Text title="Родионова П.И" />
                            <HStack justify="center" gap="8">
                                <Icon Svg={StarIcon} />
                                <Text title={`${score} / 5`} className={classes.textBlock} />
                            </HStack>
                        </VStack>
                    </Card>
                    <Card>
                        <h3 className={classes.title}>Совпадение увлечений</h3>
                    </Card>
                </div>
            </VStack>
        </Page>
    );
});

export default DetailedComparisonPage;
