/**
 * Период полураспада снега
 * Колебательные движения лопаты
 * Распределение курсантов по территориям по Пуассону
 *
 * (c) Димка Поляков, 13:02, 01.12.2023
 */

import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import React, { FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { HStack, VStack } from 'shared/UI/Stack';
import { Chips } from 'shared/UI/Chips';
import { InputMask } from 'shared/UI/InputMask';
import { PageTitle } from 'widgets/PageTitle';
import { Input } from 'shared/UI/Input';
import { Divider } from 'primereact/divider';
import { MailAutoComplete } from 'shared/UI/MailAutoComplete';
import { Text } from 'shared/UI/Text';
import { AvatarUpload } from 'widgets/AvatarUpload';
import { Slider } from 'shared/UI/Slider';
import { Skeleton } from 'primereact/skeleton';
import { DiplomaScoreInput } from 'shared/UI/DiplomaScoreInput';
import { Button } from 'shared/UI/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import classes from './CreateCandidatePage.module.scss';
import { useSubjects } from '../../api/fetchAllSubjectsApi';

interface CreateCandidatePageProps {
    className?: string;
}
interface SubjectScore {
    title: string;
    score: number;
}

const CreateCandidatePage = memo((props: CreateCandidatePageProps) => {
    const { className } = props;

    useEffect(() => {
        document.title = 'Подайте заявку';
    }, []);

    const [names, setNames] = useState<{ firstname: string; lastname: string; middlename: string }>(
        { firstname: '', lastname: '', middlename: '' },
    );
    const [image, setImage] = useState<File>();
    const [file, setFile] = useState<File>();
    const [keySkills, setKeySkills] = useState<string[]>([]);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [age, setAge] = useState<number>(24);
    const [education, setEducation] = useState<{ faculty: string; department: string }>({
        department: '',
        faculty: '',
    });
    const [subjectsScores, setSubjectsScores] = useState<SubjectScore[]>([]);

    const { data: subjects, isLoading: isSubjectsLoading } = useSubjects();

    const handleFormSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const formData = new FormData(event.currentTarget);
            formData.append('name', JSON.stringify(names));
            formData.append('phoneNumber', phoneNumber);
            formData.append('mail', mail);
            formData.append('age', age.toString());
            formData.append('education', JSON.stringify(education));
            formData.append('subjectsScores', JSON.stringify(subjectsScores));
            formData.append('keySkills', JSON.stringify(keySkills));

            fetch('http://localhost:5000/api/candidate/create', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error));
        },
        [age, education, keySkills, mail, names, phoneNumber, subjectsScores],
    );

    return (
        <Page className={classNames(classes.CreateCandidatePage, {}, [className])}>
            <PageTitle title="Регистрация кандидата" />

            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <VStack maxW gap="16">
                    <VStack maxW gap="8">
                        <Divider align="left" className={classes.divider}>
                            <Text
                                className={classes.dividerTitle}
                                align="left"
                                text="Основная информация"
                                size="small"
                            />
                        </Divider>

                        <HStack maxW justify="between" gap="32">
                            <VStack className={classes.flexGrow} gap="16">
                                <Input
                                    autoFocus
                                    onChange={(value: string) =>
                                        setNames({ ...names, lastname: value })
                                    }
                                    value={names.lastname}
                                    placeholder="Фамилия"
                                    required
                                />
                                <Input
                                    onChange={(value: string) =>
                                        setNames({ ...names, firstname: value })
                                    }
                                    value={names.firstname}
                                    placeholder="Имя"
                                    required
                                />
                                <Input
                                    onChange={(value: string) =>
                                        setNames({ ...names, middlename: value })
                                    }
                                    value={names.middlename}
                                    placeholder="Отчество (при наличии)"
                                />
                            </VStack>

                            <AvatarUpload
                                name="img"
                                file={image}
                                setFile={setImage}
                                required
                                type="img"
                                className={classes.avatarUpload}
                            />
                        </HStack>
                    </VStack>

                    <VStack maxW gap="8">
                        <Divider align="left" className={classes.divider}>
                            <Text
                                className={classes.dividerTitle}
                                align="left"
                                text="Ключевые навыки"
                                size="small"
                            />
                        </Divider>
                        <Chips
                            required
                            placeholder="Ключевые навыки"
                            chips={keySkills}
                            setChips={setKeySkills}
                        />
                    </VStack>

                    <VStack maxW gap="8">
                        <Divider align="left" className={classes.divider}>
                            <Text
                                className={classes.dividerTitle}
                                align="left"
                                text="Как с Вами связаться?"
                                size="small"
                            />
                        </Divider>
                        <HStack maxW gap="16">
                            <InputMask
                                required
                                value={phoneNumber}
                                setValue={setPhoneNumber}
                                placeholder="Номер телефона"
                                mask="+9 (999) 999-99-99"
                            />
                            <MailAutoComplete
                                required
                                placeholder="Почта"
                                value={mail}
                                setValue={setMail}
                            />
                        </HStack>
                    </VStack>

                    <VStack maxW gap="8">
                        <Divider align="left" className={classes.divider}>
                            <Text
                                className={classes.dividerTitle}
                                align="left"
                                text="Подробнее о Вас"
                                size="small"
                            />
                        </Divider>
                        <HStack maxW gap="16" align="start">
                            <Input
                                value={education.faculty}
                                onChange={(value) =>
                                    setEducation({
                                        ...education,
                                        faculty: value,
                                    })
                                }
                                required
                                placeholder="Факультет"
                            />
                            <Input
                                value={education.department}
                                onChange={(value) =>
                                    setEducation({
                                        ...education,
                                        department: value,
                                    })
                                }
                                required
                                placeholder="Специальность"
                            />
                            <VStack maxW>
                                <Input disabled value={age} className={classes.ageInput} />
                                <Slider value={age} setValue={setAge} />
                            </VStack>
                        </HStack>
                    </VStack>

                    <VStack maxW gap="8">
                        <Divider align="left" className={classes.divider}>
                            <Text
                                className={classes.dividerTitle}
                                align="left"
                                text="Оценки диплома"
                                size="small"
                            />
                        </Divider>
                        {isSubjectsLoading && (
                            <div className={classes.subjectsGrid}>
                                {new Array(10).fill(0).map((_, index) => (
                                    <Skeleton key={index} width="100%" height="40px" />
                                ))}
                            </div>
                        )}
                        <HStack maxW gap="16">
                            {subjects?.length && (
                                <div className={classes.subjectsGrid}>
                                    {subjects.map(({ title, id }) => (
                                        <DiplomaScoreInput
                                            value={subjectsScores[id]?.score}
                                            setValue={(value) =>
                                                setSubjectsScores((prevScores) => {
                                                    const newScores = [...prevScores];
                                                    newScores[id] = { title, score: value };
                                                    return newScores;
                                                })
                                            }
                                            title={title}
                                            key={id}
                                        />
                                    ))}
                                </div>
                            )}
                            <AvatarUpload
                                name="document"
                                file={file}
                                setFile={setFile}
                                required
                                className={classes.avatarUpload}
                                type="file"
                                placeholder="Ваш аттестат"
                            />
                        </HStack>
                    </VStack>

                    <Button className={classes.button} variant="success" type="submit">
                        Отправить анкету
                    </Button>
                </VStack>
            </form>
        </Page>
    );
});

export default CreateCandidatePage;
