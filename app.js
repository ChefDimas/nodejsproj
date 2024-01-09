const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// initialize express
const app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the path for static resources to be accessible
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the path for routes
const indexRouter = require('./routes/index');
const userRoute = require('./routes/user');
const addUserRoute = require('./routes/addUser');
const showUsersRoute = require('./routes/all_users');


app.use('/', indexRouter);
app.use('/user', userRoute);
app.use('/add', addUserRoute);
app.use('/all', showUsersRoute);



// set the path for uploads
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'team')));



// start the express server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});