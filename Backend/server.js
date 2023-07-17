//importing
import express from 'express';

//app Config
const app = express();
const port = process.env.PORT || 9000 ; 

//Middleware


//DB Config


//api routes
app.get('/', (req,res) => res.status(200).send('hello world'));

//listen
app.listen(port, () => console.log(`listening to port ${port}`));