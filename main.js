const restify = require('restify');

const server = restify.createServer({
	name:'family-dialer',
	version:'1.0.0'
});

server.use(restify.bodyParser());

server.post('/', function(req,res,next){
	const twiml = '<Response>' +
					'<Say> Hello, connecting you now </Say>' +
					'<Gather finishOnKey="#" action="handle-key" method="POST">'+
					'</Gather>'+
				'</Response>';

	res.send(200, twiml);
	next();
})

server.post('/handle-key', function(req,res,next){

	const twiml = '<Response>'+
					'<Dial>+'+req.params.Digits+'</Dial>'+
					'<Say>The call failed or the remote party hung up.  Goodbye.</Say>' + 
				'</Response>';

	res.send(200, twiml);
	next();
})

const port = process.ENV.PORT;
server.listen(port, function(){
	console.log('server listening on port', port);
})