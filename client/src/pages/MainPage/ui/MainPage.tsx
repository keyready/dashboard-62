import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo, useEffect } from 'react';
import { Text } from 'shared/UI/Text';
import { VStack } from 'shared/UI/Stack';
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
                            'Система ранжирования выпускников ВУЗа ' +
                            'на основе их компетенций с использованием нейросетей'
                        }
                        size="medium"
                    />
                </div>
                <div className={classes.descriptionTable}>
                    <Text align="left" title="Задача" size="medium" />
                    <Text
                        text={
                            'Задача подбора кадров по описаниям компетенций ' +
                            'требует от лица, производящего отбор, удерживать ' +
                            'в памяти большой объем информации и выполнять мн' +
                            'ожество сравнений. В целях повышения качества ра' +
                            'боты отдела рекрутинга используются автоматизиро' +
                            'ванные системы отслеживания кандидатов. Результа' +
                            'том проекта является модуль системы, позволяющий' +
                            ' повысить эффективность рекрутинга за счет автом' +
                            'атического расчетаитогового показателя компетенц' +
                            'ий и одновременного отображения компетенций сраз' +
                            'у нескольких кандидатов на одном элементе управле' +
                            'ния.'
                        }
                        size="medium"
                    />
                </div>

                <div className={classes.descriptionTable}>
                    <Text align="left" title="Команда" size="medium" />
                    <VStack maxW>
                        <a
                            className={classes.link}
                            href="//t.me/Tokumura"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Антон Терещенко (Data-analyst)
                        </a>
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
