const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Index sayfasina hosgeldiniz</h2>');
});

app.get('/hakkimda', (req, res) => {
    res.send('<h2>Hakkimda sayfasina hosgeldiniz</h2>');
});

app.get('/iletisim', (req, res) => {
    res.send('<h2>Iletisim sayfasina hosgeldiniz</h2>');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('<h2>Sayfa bulunamadi</h2>');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});
