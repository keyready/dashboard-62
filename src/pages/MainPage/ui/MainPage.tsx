import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, {
    memo, useCallback, useEffect, useState,
} from 'react';
import { RadarDiagram } from 'shared/UI/RadarDiagram';
import { Card } from 'shared/UI/Card';
import { Modal } from 'react-bootstrap';
import {
    Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,
} from 'recharts';
import classes from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const data = [
    {
        subject: 'Frontend Developing',
        Корчак: 1,
        Петров: 1,
        Иванов: 1,
        fullMark: 10,
    },
    {
        subject: 'Backend Developing',
        Корчак: 2,
        Петров: 2,
        Иванов: 2,
        fullMark: 10,
    },
    {
        subject: 'Android Developing',
        Корчак: 3,
        Петров: 3,
        Иванов: 3,
        fullMark: 10,
    },
    {
        subject: 'QA Engineer',
        Корчак: 4,
        Петров: 4,
        Иванов: 4,
        fullMark: 10,
    },
    {
        subject: 'Java Developer',
        Корчак: 5,
        Петров: 5,
        Иванов: 5,
        fullMark: 10,
    },
    {
        subject: 'Go Developer',
        Корчак: 6,
        Петров: 6,
        Иванов: 6,
        fullMark: 10,
    },
];
const specData = [
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
    },
];

const specialization = 'Создание защищенного ПО';

const MainPage = memo((props: MainPageProps) => {
    const {
        className,
    } = props;

    useEffect(() => {
        document.title = 'Хакатон 62 курс | 1 кейс';
    }, []);

    const [show, setShow] = useState<boolean>(false);
    const [specializationInfo, setSpecializationInfo] = useState<string>('');

    const onLabelClickHandler = useCallback((e) => {
        if (e) {
            setShow(true);
            setSpecializationInfo(e.activeLabel);
            console.log(e.activeLabel);
        }
    }, []);

    return (
        <Page className={classNames(classes.MainPage, {}, [className])}>
            <Card className={classes.candidatesPhoto} />
            <Card className={classes.mainInfo}>
                <h2>
                    Корчак Родион Дмитриевич
                </h2>
                <p>
                    {`Специализация: ${specialization}`}
                </p>
            </Card>
            <Card className={classes.year}>
                <h3>Военно-космическая Орденов Жукова и Красного знамени академия имени А.Ф. Можайского</h3>
                <h3>Год выпуска: 2026</h3>
            </Card>
            <Card className={classes.addIndo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa eligendi et, harum nam nemo nihil quas qui quidem sit.</Card>
            <Card className={classes.skills}>
                <h2>Умения</h2>

            </Card>
        </Page>
    );
});

export default MainPage;
