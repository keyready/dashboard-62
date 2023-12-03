import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { FormEvent, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { Divider } from 'primereact/divider';
import { Text } from 'shared/UI/Text';
import { Input } from 'shared/UI/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack } from 'shared/UI/Stack';
import { createFolderManually, getFolderIsLoading } from 'entities/Folder';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/UI/Button';
import { useSelector } from 'react-redux';
import { CandidatesDisclosure } from 'widgets/CandidatesDisclosure';
import { Candidate, CandidatePreviewGrid } from 'entities/Candidate';
import { useToaster } from 'shared/lib/hooks/useToaster/useToaster';
import classes from './ManualGroupingPage.module.scss';

interface ManualGroupingPageProps {
    className?: string;
}

const ManualGroupingPage = memo((props: ManualGroupingPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Ручное создание группы';
    }, []);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pending } = useToaster();

    const isFolderCreating = useSelector(getFolderIsLoading);

    const [folderTitle, setFolderTitle] = useState<string>('');
    const [groupingRule, setGroupingRule] = useState<string>('');
    const [candidatesIds, setCandidatesIds] = useState<number[]>([]);
    const [selected, setSelected] = useState<Candidate[]>([]);

    useEffect(() => {
        setCandidatesIds(selected.map((candidate) => candidate.id));
    }, [selected]);

    const isButtonDisabled = useMemo(
        () => folderTitle === '' || candidatesIds.length === 0 || groupingRule === '',
        [candidatesIds.length, folderTitle, groupingRule],
    );

    const handleCandidateDelete = useCallback((candidateId: number) => {
        setSelected((prev) => prev.filter((item) => item.id !== candidateId));
    }, []);
    const handleFolderCreateSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const result = await pending(
                dispatch(
                    createFolderManually({
                        folderTitle,
                        groupingRule,
                        candidatesIds,
                    }),
                ),
                { loadingMessage: 'Создаем группу...', successMessage: 'Группа создана!' },
            );

            if (result.meta.requestStatus === 'fulfilled') {
                navigate(RoutePath.grouping);
            }
        },
        [candidatesIds, dispatch, folderTitle, groupingRule, navigate, pending],
    );

    return (
        <Page className={classNames(classes.ManualGroupingPage, {}, [className])}>
            <PageTitle
                breadcrumbPath={[
                    { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                    { label: 'Группировка кандидатов', url: RoutePath.grouping },
                    { label: 'Создание группы', url: RoutePath.creategroup },
                    { label: 'Ручное создание группы' },
                ]}
                title="Ручное создание группы"
            />

            <form onSubmit={handleFolderCreateSubmit}>
                <VStack maxW>
                    <Divider align="left" className={classes.divider}>
                        <Text
                            className={classes.dividerTitle}
                            align="left"
                            text="Название группы"
                            size="small"
                        />
                    </Divider>
                    <Input
                        required
                        value={folderTitle}
                        onChange={setFolderTitle}
                        placeholder="Название группы"
                    />

                    <Divider align="left" className={classes.divider}>
                        <Text
                            className={classes.dividerTitle}
                            align="left"
                            text="Описание группы"
                            size="small"
                        />
                    </Divider>
                    <Input
                        required
                        value={groupingRule}
                        onChange={setGroupingRule}
                        placeholder="Описание группы"
                    />

                    <Divider align="left" className={classes.divider}>
                        <Text
                            className={classes.dividerTitle}
                            align="left"
                            text="Все кандидаты"
                            size="small"
                        />
                    </Divider>
                    <HStack maxW justify="between" align="start">
                        <CandidatesDisclosure
                            className={classes.candidatesList}
                            page={0}
                            limit={10000}
                            filterOptions={{ age: [18, 40], education: [] }}
                            defaultSelected={selected}
                            setSelectedProps={setSelected}
                        />
                        <CandidatePreviewGrid
                            handleCandidateDelete={handleCandidateDelete}
                            candidates={selected}
                        />
                    </HStack>

                    <HStack maxW justify="end" className={classes.buttonWrapper}>
                        <Button
                            type="submit"
                            disabled={isButtonDisabled}
                            isLoading={isFolderCreating}
                        >
                            Сформировать группу
                        </Button>
                    </HStack>
                </VStack>
            </form>
        </Page>
    );
});

export default ManualGroupingPage;
