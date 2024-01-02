// Load Express
const express = require('express');
const path = require('path');

const catDb = require('./data/cat-db');


// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)


//mount routes

// Define a 'root' route directly on app
// next lesson we'll use better practice routing
app.get('/', function(req, res) {
    // this path must start with a leading slash
    res.redirect('/cats');
});

app.get('/home', function(req, res) {
    // Never begin the name of the template with a slash (/)
    res.render('home');
});

app.get('/cats', function (req, res) {
    const cats = catDb.getAll();
    res.render('cats/index', { cats });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});