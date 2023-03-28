/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect } from 'react';
import classes from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

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
            <h2>
                Решение команды
                {' '}
                <i>M1l1t4ry_Ac4d3my</i>
            </h2>
            <h2>Состав команды:</h2>
            <ul>
                <li>
                    <a href="//t.me/VALI666KO" target="_blank" rel="noreferrer">
                        Кофанов Валентин (Backend-developer)
                    </a>
                </li>
                <li>
                    <a href="//t.me/G_Rosman" target="_blank" rel="noreferrer">
                        Яроцкий Глеб (Backend-developer)
                    </a>
                </li>
                <li>
                    <a href="//t.me/Tokumura" target="_blank" rel="noreferrer">
                        Терещенко Антон (ML Specialist)
                    </a>
                </li>
                <li>
                    <a href="//t.me/operculum" target="_blank" rel="noreferrer">
                        Поляков Дмитрий (UI/UX designer)
                    </a>
                </li>
                <li>
                    <a href="//t.me/keyrea_dy" target="_blank" rel="noreferrer">
                        Корчак Родион (Frontend-developer)
                    </a>
                </li>
            </ul>
        </Page>
    );
});

export default MainPage;
