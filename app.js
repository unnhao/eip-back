var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var reportsRouter = require('./routes/reports');
var employeeRouter = require('./routes/employee');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/reports', reportsRouter);
app.use('/employee', employeeRouter);

module.exports = app;

