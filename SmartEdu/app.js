const express = require('express');
const session = require('express-session');
const { default: mongoose } = require('mongoose');
const pageRouter = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');

const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db').then(() => {
  console.log('DB connection is successful');
});

//Template Engine
app.set('view engine', 'ejs');

//Global varriable
global.userIN = null;

//Middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'keyboard_cat',
    resave: false,
    saveUninitialized: true,
  })
  );
  
  //Routes
  app.use('*', (req, res, next) => {
    userIN = req.session.userID;
    next();
  });
app.use('/', pageRouter);
app.use('/courses', courseRoute);
app.use('/category', categoryRoute);
app.use('/users', userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
