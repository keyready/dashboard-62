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
        setTimeout(res, 500);
    });
    next();
});

server.use('/files_upload', (req, res) => {
    const { files } = req;
    res.json({ message: '4 анкеты не были добавлены, так как уже существуют в нашей базе данных' });
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
    barsDiagram: {
        Корчак: {
            'Frontend Developer': {
                HTML: 9,
                CSS: 8,
                Javascript: 9,
                'Usage of Git': 8,
                'Package Managers': 7,
                'Build Tools': 7,
                'CSS Frameworks': 9,
            },
            'Backend Developer': {
                JavaScript: 7,
                Python: 8,
                Go: 6,
                'Usage of Git': 7,
                'Relational Databases': 9,
                'NoSQL databases': 6,
                'Web Security Knowledge': 5,
            },
            'Android Developer': {
                Kotlin: 5,
                'Usage of Git': 7,
                'Components and their usage': 2,
                Application: 3,
                Building: 2,
                Testing: 6,
                Security: 3,
            },
            'QA Engineer': {
                Project: 2,
                Management: 2,
                SDLC: 3,
                QA: 4,
                'Manual Testing': 4,
                'Automated Testing': 3,
                'Non Functional Testing': 3,
                'CI/CD': 4,
            },
            'Go Developer': {
                Building: 6,
                'CLI Applications': 5,
                ORMs: 4,
                'Web Frameworks': 5,
                Logging: 4,
                'Go realtime communication': 5,
                'API Clients': 5,
                Microservices: 6,
            },
            'Java Developer': {
                Generics: 4,
                Build: 4,
                Tools: 4,
                'Web Frameworks': 4,
                ORM: 5,
                'Object-Relational Mapping': 5,
                Java: 5,
                JDBC: 5,
                Testing: 4,
            },
        },
        Петров: {
            'Frontend Developer': {
                HTML: 9,
                CSS: 9,
                Javascript: 9,
                'Usage of Git': 8,
                'Package Managers': 7,
                'Build Tools': 7,
                'CSS Frameworks': 9,
            },
            'Backend Developer': {
                JavaScript: 7,
                Python: 8,
                Go: 6,
                'Usage of Git': 9,
                'Relational Databases': 7,
                'NoSQL databases': 5,
                'Web Security Knowledge': 6,
            },
            'Android Developer': {
                Kotlin: 8,
                'Usage of Git': 9,
                'Components and their usage': 7,
                Application: 7,
                Building: 8,
                Testing: 8,
                Security: 6,
            },
            'QA Engineer': {
                Project: 6,
                Management: 6,
                SDLC: 8,
                QA: 7,
                'Manual Testing': 7,
                'Automated Testing': 6,
                'Non Functional Testing': 8,
                'CI/CD': 5,
            },
            'Go Developer': {
                Building: 8,
                'CLI Applications': 7,
                ORMs: 8,
                'Web Frameworks': 7,
                Logging: 8,
                'Go realtime communication': 9,
                'API Clients': 8,
                Microservices: 7,
            },
            'Java Developer': {
                Generics: 8,
                Build: 8,
                Tools: 7,
                'Web Frameworks': 8,
                ORM: 7,
                'Object-Relational Mapping': 8,
                Java: 9,
                JDBC: 8,
                Testing: 6,
            },
        },
        Иванов: {
            'Frontend Developer': {
                HTML: 10,
                CSS: 9,
                Javascript: 9,
                'Usage of Git': 8,
                'Package Managers': 7,
                'Build Tools': 8,
                'CSS Frameworks': 9,
            },
            'Backend Developer': {
                JavaScript: 7,
                Python: 6,
                Go: 5,
                'Usage of Git': 8,
                'Relational Databases': 7,
                'NoSQL databases': 4,
                'Web Security Knowledge': 5,
            },
            'Android Developer': {
                Kotlin: 7,
                'Usage of Git': 8,
                'Components and their usage': 6,
                Application: 6,
                Building: 7,
                Testing: 7,
                Security: 6,
            },
            'QA Engineer': {
                Project: 6,
                Management: 6,
                SDLC: 6,
                QA: 7,
                'Manual Testing': 7,
                'Automated Testing': 6,
                'Non Functional Testing': 5,
                'CI/CD': 5,
            },
            'Go Developer': {
                Building: 8,
                'CLI Applications': 7,
                ORMs: 6,
                'Web Frameworks': 7,
                Logging: 8,
                'Go realtime communication': 5,
                'API Clients': 6,
                Microservices: 7,
            },
            'Java Developer': {
                Generics: 7,
                Build: 8,
                Tools: 7,
                'Web Frameworks': 8,
                ORM: 6,
                'Object-Relational Mapping': 6,
                Java: 8,
                JDBC: 7,
                Testing: 7,
            },
        },
    },
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
