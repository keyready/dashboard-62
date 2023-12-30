/* eslint-disable guard-for-in,no-restricted-syntax */
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, ReactNode, useEffect, useMemo, useState } from 'react';
import { HStack, VStack } from 'shared/UI/Stack';
import { Text } from 'shared/UI/Text';
import { useURLParams } from 'shared/url/useSearchParams/useSearchParams';
import { Card as GradientCard } from 'shared/UI/Card';
import StarIcon from 'shared/assests/icons/star-circle.svg';
import { Icon } from 'shared/UI/Icon/Icon';
import { Skeleton } from 'primereact/skeleton';
import { useCandidates } from 'pages/CandidatesPage/api/fetchCandidatesApi';
import { RadarChart } from 'widgets/RadarChart';
import { BarChart } from 'widgets/BarChart';
import { PageTitle } from 'widgets/PageTitle';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
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

    useEffect(() => {
        document.title = 'Подробное сравнение';
    }, []);

    const [selectedIdsFromUrl, setSelectedIdsFromUrl] = useState<number[]>([]);
    const [task, setTask] = useState<string>('');

    const { getSearchParams } = useURLParams();
    const [compareCandidates, { data: compareResult, isLoading: isComparingProgress, error }] =
        useComparedCandidates();
    const { data: candidates, isLoading: isCandidatesLoading } = useCandidates({
        page: 0,
        limit: 1000,
    });

    useEffect(() => {
        const params = getSearchParams();

        if (!params.length) return;

        const urlSelected = params[1].param === 'selected' ? params[1].value : params[0].value;
        const urlTask = params[0].param === 'task' ? params[0].value : params[1].value;

        if (params.length) {
            setSelectedIdsFromUrl(urlSelected.split(',').map(Number));
            setTask(urlTask);
        }
    }, []);

    useEffect(() => {
        if (!candidates?.length) {
            return;
        }
        compareCandidates({
            candidates: candidates.filter((user) => selectedIdsFromUrl.includes(user.id)),
            task,
        });
    }, [candidates, compareCandidates, selectedIdsFromUrl, task]);

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

    if (isComparingProgress || isCandidatesLoading) {
        return (
            <Page className={classNames(classes.ComparisonPage, {}, [className])}>
                <HStack justify="start" className={classes.gradCard}>
                    <Skeleton width="400px" height="60px" borderRadius="10px" />
                </HStack>

                <VStack maxW gap="32">
                    <div className={classes.firstLine}>
                        <Skeleton width="100%" height="450px" borderRadius="10px" />
                        <Skeleton width="100%" height="450px" borderRadius="10px" />
                    </div>

                    <div className={classes.secondLine}>
                        <Skeleton width="100%" height="350px" borderRadius="10px" />
                        <Skeleton width="100%" height="350px" borderRadius="10px" />
                    </div>
                </VStack>
            </Page>
        );
    }

    if (error) {
        return (
            <Page className={classNames(classes.ComparisonPage, {}, [className])}>
                <VStack className={classes.error} maxW align="center" justify="center">
                    <Text
                        align="center"
                        variant="error"
                        title="Произошла ошибка при запросе к ChatGPT"
                        text="Перезагрузите страницу, это должно помочь"
                    />
                    <Text
                        align="center"
                        text={
                            'Иногда ChatGPT не справляется с оцениванием такого образования, ' +
                            'которое дают в Академии, поэтому сравнения может быть необходимо' +
                            'проводить несколько раз'
                        }
                        size="small"
                    />
                </VStack>
            </Page>
        );
    }

    return (
        <Page className={classNames(classes.ComparisonPage, {}, [className])}>
            <PageTitle
                breadcrumbPath={[
                    { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                    { label: 'Подробное сравнение кандидатов' },
                ]}
                title={`Задача: ${task}`}
            />

            <VStack maxW gap="32">
                <div className={classes.firstLine}>
                    <Card className={classes.candidatesCard}>
                        <h3 className={classes.title}>Специалисты</h3>

                        <VStack maxW align="start" className={classes.candidatesFrame}>
                            {compareResult?.comparedCandidates.map((user) => (
                                <HStack
                                    className={classes.row}
                                    maxW
                                    align="center"
                                    justify="start"
                                    gap="8"
                                    key={user.id}
                                >
                                    {/* <img */}
                                    {/*     src={`../${user.img}`} */}
                                    {/*     title={user.lastname} */}
                                    {/*     alt={user.lastname} */}
                                    {/*     className={classes.img} */}
                                    {/* /> */}
                                    <div>
                                        <Text
                                            text={`${user.lastname} ${user.firstname}`}
                                            size="small"
                                        />
                                        <Text text={user.middlename} size="small" />
                                    </div>
                                </HStack>
                            ))}
                        </VStack>
                    </Card>
                    <Card className={classes.card}>
                        <VStack maxW align="center" justify="start">
                            <h3 className={classes.title}>Сравнение основных параметров</h3>
                            {compareResult?.diagramData.labels.length ? (
                                <RadarChart compareResult={compareResult} />
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
                        <BarChart
                            compareResult={compareResult}
                            label={[
                                'Совпадение хобби и специальности',
                                'Совпадение специальности и задачи',
                            ]}
                        />
                    </Card>

                    <Card className={classes.cardStack}>
                        <h3 className={classes.title}>Лучший</h3>

                        <VStack maxW justify="center" align="center" className={classes.best}>
                            <img
                                src={bestCandidate.img}
                                title={bestCandidate.lastname}
                                alt={bestCandidate.lastname}
                                className={classes.bestImg}
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
                                    title={`${bestCandidate?.taskOverlap} / 10`}
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
