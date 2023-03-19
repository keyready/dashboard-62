const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const PORT = 9999;
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// server.post('/compare_candidates', (req, res) => res.status(200).json({ error: 'hello error' }));

server.post('/compare_candidates', (req, res) => res.status(200).json({
    radarDiagram: [
        {
            subject: 'Frontend Developer',
            fullMark: 10,
            candidatesScores: {
                Корчак: 9,
                Иванов: 7,
                Петров: 2,
            },
        },
        {
            subject: 'Backend Developer',
            fullMark: 10,
            candidatesScores: {
                Корчак: 7,
                Иванов: 7,
                Петров: 4,
            },
        },
        {
            subject: 'Android Developer',
            fullMark: 10,
            candidatesScores: {
                Корчак: 3,
                Иванов: 3,
                Петров: 8,
            },
        },
        {
            subject: 'QA Engineer',
            fullMark: 10,
            candidatesScores: {
                Корчак: 6,
                Иванов: 2,
                Петров: 9,
            },
        },
        {
            subject: 'Go Developer',
            fullMark: 10,
            candidatesScores: {
                Корчак: 3,
                Иванов: 7,
                Петров: 5,
            },
        },
        {
            subject: 'Java Developer',
            fullMark: 10,
            candidatesScores: {
                Корчак: 2,
                Иванов: 5,
                Петров: 9,
            },
        },
    ],
}));

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.login === email && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    // if (!req.headers.authorization) {
    //     return res.status(403).json({ message: 'AUTH ERROR' });
    // }

    next();
});

server.use(router);

// запуск сервера
server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on http://localhost:${PORT}`);
});
