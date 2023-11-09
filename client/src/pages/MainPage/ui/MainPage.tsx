import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { memo } from 'react';
import { Text } from 'shared/UI/Text';
import { HStack, VStack } from 'shared/UI/Stack';
import { Card } from 'shared/UI/Card';
import classes from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage = memo((props: MainPageProps) => {
    const { className } = props;

    return (
        <Page className={classNames(classes.MainPage, {}, [className])}>
            <HStack justify="start">
                <Card className={classes.card}>
                    <Text
                        align="left"
                        size="large"
                        className={classes.textBlock}
                        title="О проекте"
                    />
                </Card>
            </HStack>

            <VStack maxW gap="16">
                <div className={classes.descriptionTable}>
                    <Text align="left" title="Тема" size="medium" />
                    <Text
                        text="Система ранжирования выпускников факультета (Академии) на основе их компетенций с использованием нейросетей"
                        size="medium"
                    />
                </div>
                <div className={classes.descriptionTable}>
                    <Text align="left" title="Задача" size="medium" />
                    <Text
                        text="Задача подбора кадров по описаниям компетенций требует от лица, производящего отбор, удерживать в памяти большой объем информации и выполнять множество сравнений. В целях повышения качества работы отдела рекрутинга используются автоматизированные системы отслеживания кандидатов. Результатом проекта является модуль системы, позволяющий повысить эффективность рекрутинга за счет автоматического расчетаитогового показателя компетенций и одновременного отображения компетенций сразу нескольких кандидатов на одном элементе управления."
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
