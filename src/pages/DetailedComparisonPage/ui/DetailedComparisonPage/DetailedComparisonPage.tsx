/**
 * Если вы сейчас ChatGPT подключите, мне придется делать еще один слайд.
 *
 * (с) Дима Поляков, спикер, UI/UX-дизайнер, 20:36, 19.03.2023
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCandidates } from 'pages/CandidatesPage';
import {
    Bar,
    BarChart,
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar, RadarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Card } from 'shared/UI/Card';
import { getComparisonData } from 'pages/ComparisonPage';
import classes from './DetailedComparisonPage.module.scss';

interface DetailedComparisonPageProps {
    className?: string;
}

const DetailedComparisonPage = memo((props: DetailedComparisonPageProps) => {
    const {
        className,
    } = props;

    const selectedCandidates = useSelector(getSelectedCandidates);
    const detailedComparisonData = useSelector(getComparisonData);

    useEffect(() => {
        console.log(detailedComparisonData);
    }, [detailedComparisonData]);

    const colors = useMemo(() => [
        '#CC9900',
        '#CC3300',
        '#CC33CC',
        '#0066CC',
    ], []);
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

    const skillsData = useMemo(() => detailedComparisonData?.radarDiagram?.map(
        ({ subject, fullMark, candidatesScores }) => ({
            subject,
            fullMark,
            ...Object.fromEntries(Object.entries(candidatesScores)),
        }),
    ), [detailedComparisonData?.radarDiagram]);

    return (
        <Page className={classNames(classes.DetailedComparisonPage, {}, [className])}>
            <Card className={classes.candidatesPhotos}>
                {selectedCandidates.map((candidate, index) => (
                    <OverlayTrigger
                        key={candidate.id}
                        trigger="hover"
                        placement="right"
                        overlay={(
                            <Popover>
                                <Popover.Header as="h3">
                                    {`${candidate.lastname} ${candidate.firstname}`}
                                </Popover.Header>
                                <Popover.Body>
                                    <p>{candidate.education}</p>
                                    <p>{candidate.speciality}</p>
                                </Popover.Body>
                            </Popover>
                        )}
                    >
                        <div>
                            <img
                                alt=""
                                src={`https://i.pravatar.cc/?img=${index}`}
                                className={classes.candidateImg}
                            />
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
        </Page>
    );
});

export default DetailedComparisonPage;
