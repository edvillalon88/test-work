const express = require('express'),
blogRouters = require('./server/routers/blog'),
bodyParser = require('body-parser'),
cors = require("cors"),
app = express();
app.use(
    cors({
      origin: "*",
    })
  );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", blogRouters);


module.exports = app;