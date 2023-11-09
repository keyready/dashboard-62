/* eslint-disable guard-for-in,no-restricted-syntax */
/**
 * Если вы сейчас ChatGPT подключите, мне придется делать еще один слайд.
 *
 * (с) Дима Поляков, спикер, UI/UX-дизайнер, 20:36, 19.03.2023
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCandidates } from 'pages/CandidatesPage';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { Alert, OverlayTrigger, Popover } from 'react-bootstrap';
import { Card } from 'shared/UI/Card';
import { getComparisonData, getComparisonPurpose } from 'pages/ComparisonPage';
import { CandidateCard, CardStyle } from 'entities/Candidate';
import { useNavigate } from 'react-router-dom';
import classes from './DetailedComparisonPage.module.scss';

interface DetailedComparisonPageProps {
    className?: string;
}

const DetailedComparisonPage = memo((props: DetailedComparisonPageProps) => {
    const { className } = props;

    const navigate = useNavigate();

    const selectedCandidates = useSelector(getSelectedCandidates);
    const detailedComparisonData = useSelector(getComparisonData);
    const comparingPurpose = useSelector(getComparisonPurpose);

    const winnerMapper = useMemo<CardStyle[]>(
        () => ['winner', 'awardeeF', 'awardeeS', 'awardeeTh'],
        [],
    );

    const colors = useMemo(
        () => [
            '#CC9900',
            '#CC3300',
            '#CC33CC',
            '#0066CC',
            '#FF0055',
            '#8e57ec',
            '#fff34b',
            '#ff4c02',
        ],
        [],
    );
    const experienceData = useMemo(() => {
        const temp: any = [];
        selectedCandidates.forEach((candidate) => {
            const name: string = candidate.lastname || '';
            temp.push({
                name: candidate.lastname,
                [name]: candidate.experience,
            });
        });
        return temp;
    }, [selectedCandidates]);
    const hobbySpecialityOverlap = useMemo(() => {
        const temp: any = [];

        for (const key in detailedComparisonData?.hobbyOverlap) {
            const newObj: { name?: string; Overlap?: number } = {};
            newObj.name = key;
            // @ts-ignore
            newObj.Overlap = detailedComparisonData?.hobbyOverlap[key];
            temp.push(newObj);
        }

        return temp;
    }, [detailedComparisonData?.hobbyOverlap]);

    const skillsData = useMemo(
        () =>
            detailedComparisonData?.radarDiagram?.map(
                ({ subject, fullMark, candidatesScores }) => ({
                    subject,
                    fullMark,
                    ...Object.fromEntries(Object.entries(candidatesScores)),
                }),
            ),
        [detailedComparisonData?.radarDiagram],
    );

    if (!comparingPurpose) {
        setTimeout(() => {
            navigate('/candidates');
        }, 1000);
        return (
            <Page className={classNames(classes.ComparisonPage, {}, [className])}>
                <Alert variant="warning">
                    Похоже, Вы попали на эту страницу по ошибке. Вернитесь на{' '}
                    <Alert.Link href="/">главную</Alert.Link> или{' '}
                    <Alert.Link href="/candidates">на страницу сравнения кандидатов.</Alert.Link>{' '}
                    Редирект произойдет через 2.5 секунды
                </Alert>
            </Page>
        );
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <h2>{`Задача: ${comparingPurpose}`}</h2>
            <div className={classes.DetailedComparisonPage}>
                <Card className={classes.candidatesPhotos}>
                    {selectedCandidates.map((candidate, index) => (
                        <OverlayTrigger
                            key={candidate.id}
                            trigger="hover"
                            placement="right"
                            overlay={
                                <Popover>
                                    <Popover.Header as="h3">
                                        {`${candidate.lastname} ${candidate.firstname}`}
                                    </Popover.Header>
                                    <Popover.Body>
                                        <p>{candidate.education}</p>
                                        <p>{`${candidate.speciality} — ${candidate.hobby}`}</p>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <div>
                                <img alt="" src={candidate.img} className={classes.candidateImg} />
                                <p>{candidate.lastname}</p>
                                <p>{candidate.firstname}</p>
                            </div>
                        </OverlayTrigger>
                    ))}
                </Card>
                <Card>
                    <ResponsiveContainer>
                        <RadarChart data={skillsData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            {selectedCandidates.map((candidate, index) => (
                                <Radar
                                    key={index}
                                    name=""
                                    dataKey={candidate.lastname || ''}
                                    stroke={colors[index]}
                                    fill={colors[index]}
                                    fillOpacity={0.5}
                                />
                            ))}
                            <Legend />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </Card>
                <Card>
                    <h2>Опыт работы</h2>
                    <ResponsiveContainer>
                        <BarChart data={experienceData}>
                            {selectedCandidates.map((candidate, index) => (
                                <Bar
                                    key={index}
                                    barSize={30}
                                    dataKey={candidate.lastname || ''}
                                    fill={colors[index]}
                                />
                            ))}
                            <XAxis dataKey="name" />
                            <YAxis />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
                <Card>
                    <h2>Совпадение хобби и специальности</h2>
                    <ResponsiveContainer>
                        <BarChart data={hobbySpecialityOverlap}>
                            <Tooltip />
                            <Bar barSize={30} dataKey="Overlap" fill="#8e57ec" />
                            <CartesianGrid strokeDasharray="0.1 2" />
                            <XAxis domain={[1, 2]} dataKey="name" />
                            <YAxis />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </div>

            <Card className={classes.detailedCard}>
                <h2>Оценка кандидатов нашей системой</h2>
                <div className={classes.candidatesCards}>
                    {[...selectedCandidates]
                        .sort((a, b) => (b.average_score || 0) - (a.average_score || 0))
                        .map((selectedCandidate, index) => (
                            <CandidateCard
                                className={classes.candidateCard}
                                key={selectedCandidate.id}
                                candidate={selectedCandidate}
                                totalScore={selectedCandidate.average_score || 0}
                                cardStyle={winnerMapper[index]}
                            />
                        ))}
                </div>
            </Card>
        </Page>
    );
});

export default DetailedComparisonPage;
