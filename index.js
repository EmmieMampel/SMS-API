
const express = Noderequire(express);
const app = express();
const port = 3000;
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.get("/"), (req, res) => {
    var client = new twilio('authToken');

    client.messages.create({
        to: +46737345086,
        from: +46733003037,
        body: 'Hello from Emmie!',
    })
    
    res.send("SMS alert!");
}

app.listen(port, () => {
    console.log("app listening on port", port);
})
