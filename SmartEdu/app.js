const express = require('express');

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).send('INDEX PAGE');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
