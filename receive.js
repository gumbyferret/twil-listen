var http = require('http'),
    twilio = require('twilio');

http.createServer(function (req, res) {
    //Create TwiML response
    var twiml = new twilio.TwimlResponse();
    twiml.say('Hello World!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

}).listen(1337, '52.48.3.81');

console.log('TwiML servin\' server running at http://52.48.3.81:1337/');
