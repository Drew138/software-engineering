import express from 'express';
const app = express();
const port = 4200;

app.get('/clase', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});