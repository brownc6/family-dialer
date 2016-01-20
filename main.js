const restify = require('restify');

const server = restify.createServer({
	name:'family-dialer',
	version:'1.0.0',
});

server.use(restify.bodyParser());

server.post('/', function(req,res,next){
	const twiml = '<?xml version="1.0" encoding="UTF-8" ?>\n'+
				'<Response>' +
					'<Say> Hello, connecting you now </Say>' +
					'<Gather finishOnKey="#" action="handle-key" method="POST">'+
					'</Gather>'+
				'</Response>';

	res.writeHead(200,{
		'Content-Type':'text/xml'
	})
	res.write(twiml);
	res.end();
	next();
})

server.post('/handle-key', function(req,res,next){
	const twiml = '<?xml version="1.0" encoding="UTF-8"?>\n'+
				'<Response>' +
					'<Dial>+'+req.params.Digits+'</Dial>'+
					'<Say>The call failed or the remote party hung up.  Goodbye.</Say>' + 
				'</Response>';

	res.writeHead(200,{
		'Content-Type':'text/xml'
	})
	res.write(twiml);
	res.end();
	next();
})

const port = process.env.PORT || 3000;
server.listen(port, function(){
	console.log('server listening on port', port);
})