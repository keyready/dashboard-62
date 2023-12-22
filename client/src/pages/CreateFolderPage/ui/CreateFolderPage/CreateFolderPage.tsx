import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { FormEvent, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { PageTitle } from 'widgets/PageTitle';
import { HStack, VStack } from 'shared/UI/Stack';
import { Input } from 'shared/UI/Input';
import { Divider } from 'primereact/divider';
import { Text } from 'shared/UI/Text';
import { Dropdown } from 'primereact/dropdown';
import { Tree } from 'widgets/Tree';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { MultiSelect } from 'shared/UI/MultiSelect';
import { Button } from 'shared/UI/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createFolder, FolderReducer, getFolderIsLoading } from 'entities/Folder';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useToaster } from 'shared/lib/hooks/useToaster/useToaster';
import { useKeySkills } from '../../api/fetchKeySkillsApi';
import classes from './CreateFolderPage.module.scss';

interface CreateFolderPageProps {
    className?: string;
}

const CreateFolderPage = memo((props: CreateFolderPageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Создать категорию';
    }, []);

    const { data: keySkills } = useKeySkills();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pending } = useToaster();
    const isFolderCreating = useSelector(getFolderIsLoading);

    const [sortParam, setSortParam] = useState<string>('');
    const [folderTitle, setFolderTitle] = useState<string>('');
    const [selectedSortType, setSelectedSortType] = useState<number>(-1);
    const [selectedFaculty, setSelectedFaculty] = useState<string[]>([]);
    const [selectedKeySkills, setSelectedKeySkills] = useState<{ title: string; id: number }[]>([]);
    const [age, setAge] = useState<[number, number]>([18, 40]);

    const suggestions = useMemo(() => ['Возраст', 'Факультет', 'Ключевые навыки'], []);
    const isButtonDisabled = useMemo<boolean>(
        () =>
            folderTitle === '' ||
            selectedSortType === -1 ||
            (selectedSortType === 1 && !selectedFaculty.length) ||
            (selectedSortType === 2 && !selectedKeySkills.length),
        [folderTitle, selectedFaculty, selectedKeySkills, selectedSortType],
    );

    const handleFolderCreateSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const result = await pending(
                dispatch(
                    createFolder({
                        folderTitle,
                        params: {
                            param:
                                selectedSortType === 0
                                    ? 'age'
                                    : selectedSortType === 1
                                    ? 'faculty'
                                    : 'keySkills',
                            value:
                                selectedSortType === 0
                                    ? age.join('-')
                                    : selectedSortType === 1
                                    ? selectedFaculty.join(',')
                                    : selectedKeySkills.map((keySkill) => keySkill.title).join(','),
                        },
                    }),
                ),
                { loadingMessage: 'Создаем группу...', successMessage: 'Группа создана!' },
            );

            if (result.meta.requestStatus === 'fulfilled') {
                navigate(RoutePath.grouping);
            }
        },
        [
            pending,
            dispatch,
            folderTitle,
            selectedSortType,
            age,
            selectedFaculty,
            selectedKeySkills,
            navigate,
        ],
    );
    const handleAgeRangeChange = useCallback((event: SliderChangeEvent) => {
        setAge(event.value as [number, number]);
    }, []);
    const handleManualFolderFilling = useCallback(() => {
        navigate(RoutePath.manualgrouping);
    }, [navigate]);

    useEffect(() => {
        setSelectedSortType(suggestions.findIndex((item) => item === sortParam));
    }, [sortParam, suggestions]);

    return (
        <DynamicModuleLoader reducers={{ folder: FolderReducer }}>
            <Page className={classNames(classes.CreateFolderPage, {}, [className])}>
                <PageTitle
                    breadcrumbPath={[
                        { label: 'Сравнение кандидатов', url: RoutePath.candidates },
                        { label: 'Группировка кандидатов', url: RoutePath.grouping },
                        { label: 'Создание группы' },
                    ]}
                    title="Создать группу"
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
                                text="Способ заполнения группы"
                                size="small"
                            />
                        </Divider>
                        <Dropdown
                            options={suggestions}
                            value={sortParam}
                            onChange={(event) => setSortParam(event.value)}
                            emptyMessage={<p>Ничего не найдено</p>}
                            placeholder="Выберите параметр группировки"
                            required
                        />

                        {sortParam && (
                            <>
                                <Divider align="left" className={classes.divider}>
                                    <Text
                                        className={classes.dividerTitle}
                                        align="left"
                                        text="Выберите критерий отбора"
                                        size="small"
                                    />
                                </Divider>
                                {selectedSortType === 0 && (
                                    <HStack className={classes.sliderWrapper} maxW gap="16">
                                        <p>{age[0]}</p>
                                        <div style={{ width: '100%' }}>
                                            <Slider
                                                min={18}
                                                max={40}
                                                value={age}
                                                onChange={handleAgeRangeChange}
                                                range
                                            />
                                        </div>
                                        <p>{age[1]}</p>
                                    </HStack>
                                )}
                                {selectedSortType === 1 && (
                                    <Tree
                                        selectedParams={selectedFaculty}
                                        setSelectedParams={setSelectedFaculty}
                                    />
                                )}
                                {selectedSortType === 2 && (
                                    <MultiSelect
                                        data={keySkills}
                                        selected={selectedKeySkills}
                                        onChange={setSelectedKeySkills}
                                        placeholder="Выберите ключевые навыки"
                                    />
                                )}
                            </>
                        )}

                        <HStack maxW justify="end" gap="16"
className={classes.submitBtn}>
                            <Button onClick={handleManualFolderFilling}>
                                Ручное заполнение группы
                            </Button>
                            <Button
                                disabled={isButtonDisabled}
                                isLoading={isFolderCreating}
                                type="submit"
                            >
                                Сформировать группу
                            </Button>
                        </HStack>
                    </VStack>
                </form>
            </Page>
        </DynamicModuleLoader>
    );
});

export default CreateFolderPage;
