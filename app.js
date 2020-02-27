const express = require("express");
const app = express();
const port = 3000;
const routes = require('./routes');
const session = require('express-session')


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'darindra',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(express.static('pictures'))
app.use('/', routes)

app.listen(port, () => console.log("Listening On Port :", port));
