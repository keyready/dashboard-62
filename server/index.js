const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:5000'],
        credentials: true,
    }),
);

const candidatesFromDB = [
    {
        id: 0,
        firstname: 'Родион',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'ВКА',
        department: 'Создание защищенного ПО',
        age: '20',
        hobby: 'Frontend-разработка',
    },
    {
        id: 1,
        firstname: 'Димка',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'ВКА',
        department: 'Создание защищенного ПО',
        age: '20',
        hobby: 'UI/UX дизайнер',
    },
    {
        id: 2,
        firstname: 'Валя',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'ВКА',
        department: 'Создание защищенного ПО',
        age: '20',
        hobby: 'Backend-разработка',
    },
    {
        id: 3,
        firstname: 'Миша',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Политех имени Петра Великого',
        department: 'Что-то там с процессорами',
        age: '20',
        hobby: 'Cybersport',
    },
    {
        id: 4,
        firstname: 'Вася',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Московский государственный университет',
        department: 'Информатика',
        age: '21',
        hobby: 'Чтение',
    },
    {
        id: 5,
        firstname: 'Петя',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Санкт-Петербургский государственный университет',
        department: 'Математика',
        age: '22',
        hobby: 'Футбол',
    },
    {
        id: 6,
        firstname: 'Света',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Новосибирский государственный университет',
        department: 'Физика',
        age: '23',
        hobby: 'Кино',
    },
    {
        id: 7,
        firstname: 'Иван',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Политех имени Петра Великого',
        department: 'Что-то там с процессорами',
        age: '24',
        hobby: 'Cybersport',
    },
    {
        id: 8,
        firstname: 'Анна',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Московский государственный университет',
        department: 'Информатика',
        age: '25',
        hobby: 'Чтение',
    },
    {
        id: 9,
        firstname: 'Дмитрий',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Санкт-Петербургский государственный университет',
        department: 'Математика',
        age: '26',
        hobby: 'Футбол',
    },
    {
        id: 10,
        firstname: 'Елена',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Новосибирский государственный университет',
        department: 'Физика',
        age: '27',
        hobby: 'Кино',
    },
    {
        id: 11,
        firstname: 'Александр',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Политех имени Петра Великого',
        department: 'Что-то там с процессорами',
        age: '28',
        hobby: 'Cybersport',
    },
    {
        id: 12,
        firstname: 'София',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Московский государственный университет',
        department: 'Информатика',
        age: '29',
        hobby: 'Чтение',
    },
    {
        id: 13,
        firstname: 'Никита',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Санкт-Петербургский государственный университет',
        department: 'Математика',
        age: '30',
        hobby: 'Футбол',
    },
    {
        id: 14,
        firstname: 'Алексей',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Новосибирский государственный университет',
        department: 'Физика',
        age: '31',
        hobby: 'Кино',
    },
    {
        id: 15,
        firstname: 'Даша',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Политех имени Петра Великого',
        department: 'Что-то там с процессорами',
        age: '32',
        hobby: 'Cybersport',
    },
    {
        id: 16,
        firstname: 'Маша',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Московский государственный университет',
        department: 'Информатика',
        age: '33',
        hobby: 'Чтение',
    },
    {
        id: 17,
        firstname: 'Владимир',
        lastname: 'Корчак',
        middlename: 'Дмитриевич',
        HES: 'Санкт-Петербургский государственный университет',
        department: 'Математика',
        age: '34',
        hobby: 'Футбол',
    },
];
const faculties = [
    'Факультет конструкции летательных аппаратов',
    'Факультет систем управления ракетно-космических комплексов',
    'Факультет радиоэлектронных систем космических комплексов',
    'Факультет инженерного и электромеханического обеспечения',
    'Факультет сбора и обработки информации',
    'Факультет специальных информационных технологий',
    'Факультет топогеодезического обеспечения и картографии',
    'Факультет средств ракетно-космической обороны',
    'Факультет автоматизированных систем управления войсками',
];

app.use((req, res, next) => {
    for (let i = 0; i < candidatesFromDB.length; i += 1) {
        candidatesFromDB[
            i
        ].img = `https://placehold.co/600x600/82dbf7/black?text=${candidatesFromDB[
            i
        ].lastname.slice(0, 1)}${candidatesFromDB[i].firstname.slice(0, 1)}${candidatesFromDB[
            i
        ].middlename.slice(0, 1)}`;
        candidatesFromDB[i].faculty = faculties[Math.floor(Math.random() * (9 - 1 + 1)) + 1];
    }

    next();
});

app.get('/api/candidates', (req, res) => {
    const { page, limit, education, age } = req.query;

    const _page = Number(page);
    const _limit = Number(limit);
    const _age = age?.split(',').map(Number) || [18, 40];

    const startIndex = _page * _limit;
    const endIndex = startIndex + _limit;

    if (startIndex >= candidatesFromDB.length) {
        res.status(200).send([]);
        return;
    }

    const result = candidatesFromDB
        .filter((cand) => cand.age >= _age[0] && cand.age <= _age[1])
        .slice(startIndex, endIndex);

    return res.status(200).json(result);
});

app.get('/api/total_candidates', (req, res) => res.status(200).json(candidatesFromDB.length));

app.post('/api/upload', (req, res) => {
    console.log(req);

    return setInterval(() => res.status(200).json(), 2000);
});

app.post('/api/compare_candidates', (req, res) => {
    const { candidatesIds, task } = req.body;

    const candidates = candidatesFromDB
        .filter((cand) => candidatesIds.includes(cand.id))
        .map((cand) => ({
            ...cand,
            taskOverlap: ((Math.random() * 100) % 10).toFixed(2),
            hobbyOverlap: ((Math.random() * 100) % 10).toFixed(2),
        }));
    const datasets = candidatesFromDB
        .filter((cand) => candidatesIds.includes(cand.id))
        .map((cand) => ({
            label: cand.firstname,
            data: [...new Array(5)].map(() => ((Math.random() * 10) % 10).toFixed(2)),
        }));

    res.status(200).json({
        comparedCandidates: candidates,
        diagramData: {
            labels: ['Экономика', 'Педагогика', 'Политология', 'Психология', 'Строевая подготовка'],
            datasets,
        },
    });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    return res.status(200).json({ id: 1, email });
});

app.listen(9999);
