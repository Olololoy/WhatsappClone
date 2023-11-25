//importing
import express from 'express';

//app Config
const app = express();
const port = process.env.PORT || 9000 ;  // what is this, and what software provides this object node or js

//Middleware


//DB Config


//api routes
app.get('/', (req,res) => res.status(200).send('hello world'));

//listen
app.listen(port, () => console.log(`listening to port ${port}`));




/*
All this code is just a text file
    it will be written in the text format of javascript
    it will be given to some software to process and run and execute

Server
    process + network
        network allows data to flow in and out
        processing power is the power of the transistors or logic
            data comes in
            data gets processed
            data gets out
    So probably when this file and the software where this file will be feeded does is
        open networking capabilities ( fundamentlly data in data out )
        and sets up the processing centers ( logic functions and pathways ) the data inflow will be caught processed and
    


*/