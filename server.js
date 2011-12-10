var   util = require('util')
	, express = require('express')
	, shorturl = require('shorturl')
	, app = express.createServer()
	;
	//express config
	app.use(express.bodyParser());



app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000);