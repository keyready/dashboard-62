import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo, useEffect, useState } from 'react';
import { MTable, TableDataProps } from 'shared/UI/MTable';
import { PageNavbar } from 'pages/CandidatesPage/ui/PageNavbar/PageNavbar';
import classes from './CandidatesPage.module.scss';

const headers = ['ФИО', 'Образование', 'Специальность', 'Возраст', 'Опыт работы'];
const tableData: TableDataProps[] = [
    {
        id: 1,
        name: 'Корчак Родион Дмитриевич',
        education: 'ВКА имени А.Ф.Можайского',
        specialization: 'Создание защищенного ПО',
        age: 20,
        experience: 1.5,
    },
    {
        id: 2,
        name: 'Константинов Артем Александрович',
        education: 'Московский физико-технический институт',
        specialization: 'Информационная безопасность',
        age: 23,
        experience: 2.5,
    },
    {
        id: 3,
        name: 'Захаров Андрей Викторович',
        education: 'МГТУ им. Н.Э.Баумана',
        specialization: 'Программирование',
        age: 21,
        experience: 1.8,
    },
    {
        id: 4,
        name: 'Попова Мария Ивановна',
        education: 'Санкт-Петербургский политехнический университет',
        specialization: 'Криптография',
        age: 22,
        experience: 1.2,
    },
    {
        id: 5,
        name: 'Гусев Антон Сергеевич',
        education: 'МГУ им. М.В.Ломоносова',
        specialization: 'Математические методы в информатике',
        age: 24,
        experience: 2.7,
    },
    {
        id: 6,
        name: 'Петрова Ольга Николаевна',
        education: 'Санкт-Петербургский государственный университет',
        specialization: 'Компьютерная безопасность',
        age: 25,
        experience: 3,
    },
    {
        id: 7,
        name: 'Сидоров Михаил Андреевич',
        education: 'Московский государственный университет имени М.В. Ломоносова',
        specialization: 'Криптография',
        age: 27,
        experience: 4.5,
    },
    {
        id: 8,
        name: 'Алексеева Екатерина Викторовна',
        education: 'Московский государственный технический университет имени Н.Э.Баумана',
        specialization: 'Защита информации в телекоммуникационных системах',
        age: 24,
        experience: 1,
    },
    {
        id: 9,
        name: 'Иванов Дмитрий Сергеевич',
        education: 'Санкт-Петербургский политехнический университет Петра Великого',
        specialization: 'Информационная безопасность',
        age: 26,
        experience: 2.5,
    },
    {
        id: 10,
        name: 'Тимофеева Анастасия Александровна',
        education: 'Московский государственный технический университет имени Н.Э.Баумана',
        specialization: 'Компьютерные системы и сети',
        age: 22,
        experience: 0.5,
    },
    {
        id: 11,
        name: 'Смирнов Андрей Викторович',
        education: 'Московский физико-технический институт',
        specialization: 'Криптография',
        age: 28,
        experience: 5,
    },
    {
        id: 12,
        name: 'Макарова Валерия Олеговна',
        education: 'Санкт-Петербургский государственный университет',
        specialization: 'Информационная безопасность',
        age: 24,
        experience: 1.5,
    },
    {
        id: 13,
        name: 'Григорьев Павел Дмитриевич',
        education: 'Московский государственный технический университет имени Н.Э.Баумана',
        specialization: 'Компьютерные системы и сети',
        age: 23,
        experience: 0.5,
    },
];
interface CandidatesPageProps {
    className?: string;
}

const CandidatesPage = memo((props: CandidatesPageProps) => {
    const {
        className,
    } = props;

    const [search, setSearch] = useState<string>('');
    const [candidates, setCandidates] = useState<string[]>([]);

    useEffect(() => {
        console.log(candidates);
    }, [candidates]);

    return (
        <Page className={classNames(classes.CandidatesPage, {}, [className])}>
            <PageNavbar
                isCandidates={!!candidates.length}
                search={search}
                setSearch={setSearch}
            />
            <MTable
                headers={headers}
                tableData={tableData}
                candidates={candidates}
                setCandidates={setCandidates}
            />
        </Page>
    );
});

export default CandidatesPage;
