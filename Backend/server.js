//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';

//app Config
const app = express();
const port = process.env.PORT || 9000 ;  // what is this, and what software provides this object node or js

//Middleware
app.use(express.json());

//DB Config
//mongo db password nyWiAIwTIUIeXuZy
//mongo db uri - mongodb+srv://akshatkhandelwal1999:nyWiAIwTIUIeXuZy@cluster0.5zdeka6.mongodb.net/?retryWrites=true&w=majority
const mongo_connection_url = 'mongodb+srv://akshatkhandelwal1999:nyWiAIwTIUIeXuZy@cluster0.5zdeka6.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongo_connection_url);     

const db = mongoose.connection;

//api routes
app.get('/', (req,res) => res.status(200).send('hello world'));

// app.post('/messages/new', (req, res) => {
//     const dbMessage = req?.body; // yaha pe konsi form me hai message json ya js object and messages.create me jo db message jaa rha hai wo kya expect karta hai json ya js object

//     Messages.create(dbMessage, (err, data) => {
        
//         if (err) { 
//             res.status(500).send(err); // what is the structure of this error , also can parse this error here
//         } else {
//             res.status(201).send(data);
//         }


//     });
// })

app.post('/messages/new', (req, res) => {
        const dbMessage = req?.body; 

        Messages.create(dbMessage).then((result) => {
            res.status(201).send(result);
        });
        
    });

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
    So probably when this file is loaded and the software where this file will be feeded does is
        open networking capabilities ( fundamentlly data in data out )
        and sets up the processing centers ( logic functions and pathways ) the data inflow will be caught processed and
    
Express and app
  anything on the computer world or the software world runs on the fundamentals and basic tools available and that are 
    logic operators ( enabling mathematical operations as well )
    storage
      certain way of variable storage 
      logic operators -> functions 
      functions + storage ->

(
  I always imagiend ki isse bohot zyaada hot ahoga but kya itna simple hai fundamental level pe and agar fundamental level pe kucch change kare to kitna change ho sakta hai sab kucch 
  and kya itna hi possible hai, kya ye exhaustive hai 
  ( mathematical operations to exhaustive keh sakte hai waise logicla operators bhi exhaustive prove karne ko keh skate hai )
    to agar ek level upar aakar cheeze exhaustive hai to 
    btw mai inki baat nahi kar rha tha mai koi bhi software ek object/class ki arah available kehne ko keh rha tha ( o kaafi simplified lag rha hai ) but object and classes
    har wo cheeze encapsulate karte hai jo computers provide karte hai to wo software development ke fundamentals ho hi sakte hai
)

node me ye file jaati hai, upar se neeche execution hota hai ( jaise kisi normal js file ka hota hai ) but something still stays oepn 
  maybe the app.listen ka execution never ends ( so bound by js execution rules ) or maybe these is a way of connecting to the native modules of the 
  os, to keep something new ,running ,to serve as an open path to network data requests and then to take those requests to appropriate logic applying functions
  that do more stuff and maybe send back data to a certain place ( or the place that initially sent the request )
  ho sakta hai ki express os native modules se bhi baat cheet kare and wahi se port ya network requests apni taraf redirect kare
  and express humse bas bare minimum information chahta hai jo zaroori hai , ie port req type function to process the request and the to be returned response 


CRUD ( create read update delete - database operations )
  Rest api operations ( most frequest / important / exhaustive)
    get
    post ( create / update )
    delete

nodemon == node but just restarts the server when ny changes are saved in the file  ( quick overview assumption )
  nodemon server.js === node server.js + when server file changes again node server.js 

*/

