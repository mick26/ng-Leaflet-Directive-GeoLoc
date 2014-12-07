/*=========================================================
Michael Cullen
server.js
2014

Working - (Tá se ag obair)
============================================================*/

'use strict';


/* ========================================================== 
External Modules/Packages Required
============================================================ */
var express  = require('express');	
var http = require('http');
var app = express(); 		

/* ========================================================== 
Port the server will listen on
============================================================ */
app.set('port', process.env.PORT || 3040);
app.use(express.static(__dirname + '/public')); 

var server = http.createServer(app);

/* ========================================================== 
Start server listening on a port
============================================================ */
server.listen(app.get('port'), function() {
  console.log('Express HTTP server listening on port ' + app.get('port'));
});

