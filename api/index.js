const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
    res.json('test okay');
});

app.listen(4000);
