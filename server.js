const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('APT Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started om port ${PORT}`));
