const express = require("express");
const bodyParser = require("body-parser");

// creating an express application

const app = express();

// handling json body request
app.use( bodyParser.json() );

app.get('/', function(req, res) {

  res.json({
    status: true,
     message: "loans API running successfull"
    });
});

//post API for new lone application
app.post('/new-loan', function(req, res){
    const loanData = req.body;

  /*  const firstName = loanData.firstName;
    const lastName = loanData.lastName;
    const amount = loanData.amount;
    const purpose = loanData.purpose;
    const email = loanData.email;
   */

// you can do same thing using destructing object
  const {firstName, lastName, amount, purpose, email } = loanData;

  if(!firstName) {
  /* return res.status(400).json({
        status: false,
        error: 'please provide firstname'
    })
    */
    return sendErrorResponse(res, 'pleas provide firstName')
   }


   
   if(!lastName) {
   /* return res.status(400).json({
        status: false,
        error: 'please provide lastname'
    })
    */
    return sendErrorResponse(res, 'pleas provide lastNamet')
   }  // we can wright both ways upprer way or down way
   if(!amount) {
   /* return res.status(400).json({
        status: false,
        error: 'please provide amount'
   */
        return sendErrorResponse(res, 'pleas provide lone amount')
   }
   if(!email) {
   /* return res.status(400).json({
        status: false,
        error: 'please provide email'
    })
    */
    return sendErrorResponse(res, 'pleas provide email')
   }

    res.json({
        status : true,
        message: "New Lone application created....",
        data: loanData
    });
});

function  sendErrorResponse(response, erroeMessage) {
    return response.status(400).json({
    status: false,
    error: erroeMessage
});
}





app.listen(3000, function() {
    console.log(`API Services are running on http://localhost:3000`);
});