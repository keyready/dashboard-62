import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect, useState } from 'react';
import { Text } from 'shared/UI/Text';
import { HStack, VStack } from 'shared/UI/Stack';
import { Card } from 'shared/UI/Card';
import { PageTitle } from 'widgets/PageTitle';
import classes from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'IVT-23';
    }, []);

    return (
        <Page className={classNames(classes.MainPage, {}, [className])}>
            <PageTitle title="О проекте" />

            <VStack maxW gap="16">
                <div className={classes.descriptionTable}>
                    <Text align="left" title="Тема" size="medium" />
                    <Text
                        text={
                            'Система ранжирования выпускников академии' +
                            ' на основе их компетенций с использованием нейросетей'
                        }
                        size="medium"
                    />
                </div>
                <div className={classes.descriptionTable}>
                    <Text align="left" title="Задача" size="medium" />
                    <Text
                        text={
                            'Задача подбора кадров по описаниям компетенций требует от лица, ' +
                            'производящего отбор, удерживать в памяти большой объем информаци' +
                            'и и выполнять множество сравнений. В целях повышения качества ра' +
                            'боты отдела рекрутинга используются автоматизированные системы о' +
                            'тслеживания кандидатов. Результатом проекта является модуль сист' +
                            'емы, позволяющий повысить эффективность рекрутинга за счет автом' +
                            'атического расчетаитогового показателя компетенций и одновременн' +
                            'ого отображения компетенций сразу нескольких кандидатов на одном' +
                            ' элементе управления.'
                        }
                        size="medium"
                    />
                </div>

                <div className={classes.descriptionTable}>
                    <Text align="left" title="Команда" size="medium" />
                    <VStack maxW>
                        <a
                            className={classes.link}
                            href="//t.me/VALI666KO"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Кофанов Валентин (Backend-developer)
                        </a>
                        <a
                            className={classes.link}
                            href="//t.me/operculum"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Поляков Дмитрий (UI/UX designer)
                        </a>
                        <a
                            className={classes.link}
                            href="//t.me/keyrea_dy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Корчак Родион (Frontend-developer)
                        </a>
                    </VStack>
                </div>
            </VStack>
        </Page>
    );
});

export default MainPage;
