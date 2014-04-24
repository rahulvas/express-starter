var express = require("express");
var ejs = require("ejs");
var app = express();


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
  var facts = ['Santa Claus is Real', "'A man a plan a canal panama' is a palindrome.", 'Math is hard', 'Aunt Jemima is the fucking bomb!'];
  /////

app.get('/fact', function(req, res) {
  res.render('fact.html', {
    fact: facts[Math.floor(Math.random() * facts.length)]
   });
});

app.get('/facts', function(req, res) {
  res.render('facts.html', { 
    facts : facts});
});

app.get('/submit_fact', function(req, res) {
  var newfact = req.query['fact'];
  facts.push(newfact);
  res.redirect('/facts');
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
