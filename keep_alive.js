const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('achira music  is Alive!'));

app.listen(port, () => console.log(`achira music is listening to http://localhost:${port}`));