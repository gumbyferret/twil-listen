// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
// Don't include <> when replacing text

var accountSid = '<enter your account sid here';
var authToken = '<enter your token here>';

 
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

//Send an SMS text message
client.sendMessage({

    to:'+<number you want to sms without zero>', // Any number Twilio can deliver to
    from: '+<tiwilio number>', // A number you bought from Twilio and can use for outbound communication
    body: '<message>' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+<number>"
        console.log(responseData.body); // outputs "<message>"

    }
});
