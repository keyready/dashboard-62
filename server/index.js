const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }),
);

app.post('/api/upload', (req, res) => {
    console.log(req);

    setInterval(() => res.status(200).json(), 2000);
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    return res.status(200).json({ id: 1, email });
});

app.listen(9999);
