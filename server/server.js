const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
    const readfile = fs.readFileSync('./foto.json', 'utf8');
    const data = JSON.parse(readfile).response.docs;
    res.json(data);
});

app.get('/:id', (req, res) => {
    const images = JSON.parse(fs.readFileSync('./foto.json', 'utf8')).response.docs;
    const image = images.find(i => req.params.id == i.id);
    return res.json(image);
});

app.post('/', (req, res) => {
    res.send('Image should be created');
});

app.patch('/:id', (req, res) => {
    res.send(`Image with id ${req.params.id} should be updated`);
});

app.delete('/:id', (req, res) => {
    res.send(`Image with id ${req.params.id} should be deleted`);
});

app.listen(3000, () => console.log('Server started'));