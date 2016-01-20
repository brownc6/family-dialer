const restify = require('restify');

const server = restify.createServer({
	name:'family-dialer',
	version:'1.0.0'
});

server.use(restify.bodyParser());

server.post('/', function(req,res,next){
	const twiml = '<?xml version="1.0" encoding="UTF-8" ?>'+
				'<Response>' +
					'<Say> Hello, connecting you now </Say>' +
					'<Gather finishOnKey="#" action="handle-key" method="POST">'+
					'</Gather>'+
				'</Response>';

	res.setHeader('content-type','text/xml');
	res.send(200, twiml);
	next();
})

server.post('/handle-key', function(req,res,next){
	const twiml = '<?xml version="1.0" encoding="UTF-8"?>'+
				'<Response>' +
					'<Dial>+'+req.params.Digits+'</Dial>'+
					'<Say>The call failed or the remote party hung up.  Goodbye.</Say>' + 
				'</Response>';

	res.setHeader('content-type','text/xml');
	res.send(200, twiml);
	next();
})

const port = process.env.PORT;
server.listen(port, function(){
	console.log('server listening on port', port);
})