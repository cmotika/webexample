var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   res.send('Hello Lufthansa');  
})  
var server = app.listen(8888, function () {  
var port = server.address().port  
  //http://127.0.0.1:8888/
 console.log("WebExample: Server up at http://127.0.0.1:%s", port)  
})

// some change 2