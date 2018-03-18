const express = require('express');
const router = express.Router();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// const index = require('./routes/index');
// const users = require('./routes/users');


const app = express();
const context = {};

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src')));

// app.use('/', index);
// app.use('/users', users);

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
// ReactDOMServer.renderToString(<StaticRouter> <App></App> </StaticRouter>);

import React from 'react';
import { StaticRouter } from 'react-router';
import ReactDOMServer from 'react-dom/server';
// import App from './src/App/App';
import App from './src/_components/Navbar';

router.get('*', (req, res) => {
    const html = ReactDOMServer.renderToString(React.createElement(App));

    // res.send(`<!doctype html>
    //   <div id="root">${html}</div>`);


    res.render('index', { html });
    // res.send(html);
});

app.use('*', router);

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
