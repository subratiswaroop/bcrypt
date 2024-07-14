'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      console.log(res);
    });
  });

// const hash = bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
//     console.log(hash);
//     bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
//         console.log(res); // should be true
//        });
     
//   });

 

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
