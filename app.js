var express = require("express");
var ejs = require("ejs");
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('facts.db');


///////////////////////////////////////////////////////////////////////////////
// APP CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
//configure logging
app.use(express.logger());
//make files in static folder publicly accessible
app.use('/static', express.static(__dirname + '/static'));
//use ejs for html templates
app.engine('html', ejs.renderFile);


///////////////////////////////////////////////////////////////////////////////
// APP ROUTES       
app.get('/calc', function(req, res) {
  res.render('calc.html', { });
});

app.get('/test', function(req, res) {
  res.render('test.html', { });
});

app.get('/stuff', function(req, res) {
  res.render('stuff.html', { });
});

app.get('/imgrr', function(req, res) {
  res.render('imgrr.html', { });
});

app.get('/canvas', function(req, res) {
  res.render('canvas.html', { });
});

app.get('/funcs', function(req, res) {
  res.render('funcs.html', { });
});

app.get('/ball', function(req, res) {
  res.render('ball.html', { });
});

app.get('/chain_reaction', function(req, res) {
  res.render('chain_reaction.html', { });
});

//////
  //var facts = ['Santa Claus is Real', "'A man a plan a canal panama' is a palindrome.", 'Math is hard', 'Aunt Jemima is the fucking bomb!'];
  /////

app.get('/fact', function(req, res) {
  db.get('SELECT * FROM fact_table ORDER BY RANDOM()', function(err, item) {
 // render page here
   res.render('fact.html', {fact: item.fact_str});
});
});

app.get('/facts', function(req, res) {
  db.all('SELECT * FROM fact_table', function(err, items) {
 // render page here
 var facts = [];
 for(var i = 0; i< items.length; i++){
    facts.push(items[i].fact_str);
 }
   res.render('facts.html', { 
    facts : facts});
});
});

app.get('/submit_fact', function(req, res) {
  var newfact = req.query['fact'];
  db.run('INSERT INTO fact_table VALUES ("' + newfact + '")');
  facts.push(newfact);
  res.redirect('/fact');
});

                                                        //
///////////////////////////////////////////////////////////////////////////////
//default route
app.get('/', function(req, res) {
  res.render('index.html', { });
});

///////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
