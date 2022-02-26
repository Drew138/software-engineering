import express from 'express';
import db from "./config/database";
const app = express();
const port = 4200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/clase', require('./routes/clase'))

const PORT = process.env.PORT || 5000; // for deploying, 5000 in development
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
