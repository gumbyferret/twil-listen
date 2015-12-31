var http = require('http');
var twilio = require('twilio');
var qs = require('querystring');

http.createServer(function (req, res) {

  var body = '';

  req.setEncoding('utf8');

  req.on('data', function(data) {
    body += data;
  });

  req.on('end', function() {
    var data = qs.parse(body);
    var twiml = new twilio.TwimlResponse();
    var jsonString = JSON.stringify(data);
    var jsonDataObject = JSON.parse(jsonString);
    twiml.say('Hello there')
    .pause({ length:3 })
    .say('How are you today?', {
        voice:'woman',
        language:'en-gb'
    });
    //.play('http://www.example.com/some_sound.mp3');

    twiml.message('Thanks, your message of ' + jsonDataObject.Body + ' was received!');
    console.log('Message from: '+jsonDataObject.From+' saying: '+jsonDataObject.Body);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });

}).listen(80);
