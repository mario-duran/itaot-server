'use sctrict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('lodash');

app.get('/', function(req, res){
  res.send('<h1>ITAOT SERVER</h1><p>Hello! my name is Human...</p>');
});


http.listen(3000, function(){
  console.log('Listening on PORT:3000');
});
