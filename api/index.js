const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.json('test ok3');
});

app.listen(4000);
