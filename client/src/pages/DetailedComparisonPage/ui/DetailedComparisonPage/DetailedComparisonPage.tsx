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
import { Skeleton } from 'primereact/skeleton';
import { useCandidates } from 'pages/CandidatesPage/api/fetchCandidatesApi';
import { ComparedCandidatesResult, useComparedCandidates } from '../../api/compareCandidatesApi';
import classes from './DetailedComparisonPage.module.scss';
import cardClasses from './card.module.scss';

interface DetailedComparisonPageProps {
    className?: string;
}

const Card = memo((props: { children: ReactNode; className?: string }) => {
    const { className, children } = props;

    return <div className={classNames(cardClasses.Card, {}, [className])}>{children}</div>;
});

const DetailedComparisonPage = memo((props: DetailedComparisonPageProps) => {
    const { className } = props;

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [barData, setBarData] = useState({});
    const [barOptions, setBarOptions] = useState({});

    const [selectedIdsFromUrl, setSelectedIdsFromUrl] = useState<number[]>([]);

    const { getSearchParams } = useURLParams();
    const [compareCandidates, { data: compareResult, isLoading, error }] = useComparedCandidates();
    const { data: candidates } = useCandidates(1);

    useEffect(() => {
        const params = getSearchParams();

        if (!params.length) return;

        const urlSelected = params[1].param === 'selected' ? params[1].value : params[0].value;

        if (params.length) {
            setSelectedIdsFromUrl(urlSelected.split(',').map(Number));
        }
    }, []);

    useEffect(() => {
        if (!candidates?.length) {
            return;
        }
        compareCandidates(candidates.filter((user) => selectedIdsFromUrl.includes(user.id)));
    }, [candidates, compareCandidates, selectedIdsFromUrl]);

    const task = useMemo(() => getSearchParams()[1].value, []);
    const bestCandidate = useMemo<Partial<ComparedCandidatesResult>>(() => {
        if (!compareResult?.comparedCandidates?.length) {
            return {};
        }

        let best = compareResult?.comparedCandidates[0];
        for (let i = 0; i < compareResult.comparedCandidates.length; i += 1) {
            if (compareResult.comparedCandidates[i].taskOverlap > best.taskOverlap) {
                best = compareResult.comparedCandidates[i];
            }
        }

        return best;
    }, [compareResult]);
    const colors = useMemo(
        () => ['#FCE4D6', '#FDF4E3', '#E6F0F9', '#E8F6E4', '#FDF2E8', '#E3F2FD'],
        [],
    );

    useEffect(() => {
        const data =
            {
                ...compareResult?.diagramData,
                datasets: compareResult?.diagramData?.datasets?.map((dataset, index) => ({
                    ...dataset,
                    color: colors[index],
                })),
            } || {};
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: '#fff', // цвет легенды
                    },
                },
            },
            scales: {
                r: {
                    grid: {
                        color: '#fff', // цвет сетки радара
                    },
                },
            },
            responsive: true,
        };

        setChartData(data);
        setChartOptions(options);
    }, [colors, compareResult]);

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
                            {compareResult?.comparedCandidates.map((user) => (
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
                            {compareResult?.diagramData.labels.length ? (
                                <Chart
                                    className={classes.radar}
                                    type="radar"
                                    data={chartData || {}}
                                    options={chartOptions}
                                />
                            ) : (
                                <Skeleton
                                    borderRadius="40px"
                                    width="400px"
                                    height="400px"
                                    shape="rectangle"
                                />
                            )}
                        </VStack>
                    </Card>
                </div>

                <div className={classes.secondLine}>
                    <Card>
                        <h3 className={classes.title}>Совпадение хобби и задачи</h3>
                    </Card>

                    <Card>
                        <h3 className={classes.title}>Лучший</h3>

                        <VStack maxW align="center" className={classes.best}>
                            {/* TODO это фотка тут должна быть */}
                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    backgroundColor: 'red',
                                    borderRadius: 10,
                                }}
                            />
                            <Text
                                title={`${bestCandidate.lastname} ${bestCandidate.firstname?.slice(
                                    0,
                                    1,
                                )}. ${bestCandidate.middlename?.slice(0, 1)}`}
                            />
                            <HStack justify="center" gap="8">
                                <Icon Svg={StarIcon} />
                                <Text
                                    title={`${bestCandidate?.taskOverlap} / 5`}
                                    className={classes.textBlock}
                                />
                            </HStack>
                        </VStack>
                    </Card>
                </div>
            </VStack>
        </Page>
    );
});

export default DetailedComparisonPage;
