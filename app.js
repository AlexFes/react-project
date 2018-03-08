const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');

// import * as express from 'express';

// const React = require('react');
// const StaticRouter = require('react-router');
// const ReactDOMServer = require('react-dom/server');

// import React from 'react';
// import StaticRouter from 'react-router';
// import ReactDOMServer from 'react-dom/server';
// import App from './src/App/App';


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', index);
app.use('/users', users);

// Settle up server side rendering
// app.get('*', (req, res) => {
//     const staticContext = {};
//
//     const html = ReactDOMServer.renderToString(
//         <StaticRouter location={req.url} context={staticContext}>
//             <App/>
//         </StaticRouter>
//     );
//
//     res.status(staticContext.statusCode || 200).send(html);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
