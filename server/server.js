const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
    const readfile = fs.readFileSync('./foto.json', 'utf8');
    res.json(readfile);
});

app.get('/:id', (req, res) => {
    res.send(`Get image with id ${req.params.id}`);
});

app.post('/', (req, res) => {
    res.send('Image created');
});

app.patch('/:id', (req, res) => {
    res.send(`Image with id ${req.params.id} updated`);
});

app.delete('/:id', (req, res) => {
    res.send(`Image with id ${req.params.id} deleted`);
});

app.listen(5000, () => console.log('Server started'));