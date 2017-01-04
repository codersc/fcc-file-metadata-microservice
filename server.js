var port = process.env.PORT || 8080;
var express = require('express');
var app = express();
var path = require('path');  
var engines = require('consolidate');
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', upload.any(), function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ size: req.files[0].size }, null, 3));    
});

app.listen(port);