const express = require('express');
const mailjet = require ('node-mailjet')


const app = express();

app.use(express.json());

app.post('/send-email', function(){

  mailjet.connect('321f118c453276731c34a067d90f258f', '6169fc163c88611b26194e8895975eee')
  const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
      {
        "From": {
        "Email": "caiotony16@gmail.com",
        "Name": "Caio"
      },
      "To": [
          {
            "Email": "caiotony16@gmail.com",
            "Name": "Caio"
          }
        ],
        "Subject": "Greetings from Mailjet.",
        "TextPart": "My first Mailjet email",
        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        "CustomID": "AppGettingStartedTest"
      }
    ]
  })
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

});


app.listen(processs.env.PORT || 8080, function() {
  console.log('listening')
})
