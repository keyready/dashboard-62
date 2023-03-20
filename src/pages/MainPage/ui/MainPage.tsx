import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect } from 'react';
import classes from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const specData = {
    Корчак: {
        'Frontend Developer': [
            {
                name: 'HTML',
                score: 10,
            },
            {
                name: 'CSS',
                score: 9,
            },
            {
                name: 'Javascript',
                score: 8,
            },
            {
                name: 'Usage of Git',
                score: 8,
            },
            {
                name: 'Package Managers',
                score: 6,
            },
            {
                name: 'Build Tools',
                score: 6,
            },
            {
                name: 'CSS Frameworks',
                score: 7,
            }],
        'Backend Developer': [
            {
                name: 'JavaScript',
                score: 7,
            },
            {
                name: 'Python',
                score: 8,
            },
            {
                name: 'Go',
                score: 6,
            },
            {
                name: 'Usage of Git',
                score: 7,
            },
            {
                name: 'Relational Databases',
                score: 9,
            },
            {
                name: 'NoSQL databases',
                score: 6,
            },
            {
                name: 'Web Security Knowledge',
                score: 5,
            },
        ],
    },
    Петров: {
        'Frontend Developer': [
            {
                name: 'HTML',
                score: 4,
            },
            {
                name: 'CSS',
                score: 3,
            },
            {
                name: 'Javascript',
                score: 2,
            },
            {
                name: 'Usage of Git',
                score: 8,
            },
            {
                name: 'Package Managers',
                score: 5,
            },
            {
                name: 'Build Tools',
                score: 1,
            },
            {
                name: 'CSS Frameworks',
                score: 4,
            }],
        'Backend Developer': [
            {
                name: 'JavaScript',
                score: 2,
            },
            {
                name: 'Python',
                score: 4,
            },
            {
                name: 'Go',
                score: 5,
            },
            {
                name: 'Usage of Git',
                score: 1,
            },
            {
                name: 'Relational Databases',
                score: 3,
            },
            {
                name: 'NoSQL databases',
                score: 5,
            },
            {
                name: 'Web Security Knowledge',
                score: 9,
            },
        ],
    },
};

const MainPage = memo((props: MainPageProps) => {
    const {
        className,
    } = props;

    useEffect(() => {
        document.title = 'Хакатон 62 курс | 1 кейс';
    }, []);

    return (
        <Page className={classNames(classes.MainPage, {}, [className])}>
            <h2>
                Разработка средства интерактивной визуализации компетенции выпускника высшего учебного заведения (dashboard)
            </h2>
            <p>
                Задача подбора кадров по описаниям компетенций, представляемым в резюме соискателей требует от лица, производящего отбор, удерживать в памяти большой объем информации и выполнять множество сравнений, что, в конечном счете, может привести к выбору неоптимальной кандидатуры. В целях повышения качества работы отдела рекрутинга используются автоматизированные системы отслеживания кандидатов (ATS, Applicant Tracking System).
            </p>

        </Page>
    );
});

export default MainPage;
