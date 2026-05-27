const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hello', (req, res) => {
    res.json({
        imie: "Roman",
        nazwisko: "Didkovskyi",
        index: "77433"
    });
});

app.get('/', (req, res) => {
    res.send('Server Express działa. Open http://localhost:3000/index.html');
});

app.listen(port, () => {
    console.log(`Server działa! Link: http://localhost:${port}`);
});
