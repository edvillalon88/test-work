const express = require('express'),
blogRouters = require('./server/routers/blog'),
bodyParser = require('body-parser'),
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/blog", blogRouters);


module.exports = app;