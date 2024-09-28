//server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/data', (req, res) => {
    res.json([
        { name: 'Song 1' },
        { name: 'Song 2' },
        { name: 'Song 3' },
    ]);
});
