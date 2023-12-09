//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';


//app Config
const app = express();
const port = process.env.PORT || 9000 ;  // what is this, and what software provides this object node or js
const pusher = new Pusher({
  appId: "1715242",
  key: "4eb069f1dce0c1999f5d",
  secret: "80a25e92e932a0cffd26",
  cluster: "ap2",
  useTLS: true
});



//Middleware
app.use(express.json());
/*
// this checks for some security and if it passes the security tests the request is pushed to the next steps or the appropriate backend functions ( middlewares )
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
})
but using cors instead
*/
app.use(cors());


//DB Config
  //l1 offloaded
  //l2 offloaded
  //l3 offloaded
  //l4 offloaded
  //l5 offloaded

const db = mongoose.connection;

db.once("open", () => {
  console.log('dbConnected');

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch(); // understanding these even deeper

  changeStream.on("change", (change) => {
    console.log("A Change Occuerd", change);

    if ( change.operationType === 'insert' ){
      const messageDetails = change.fullDocument;
//////////////////////////////////////////////////////// pusher ka kaam bas itna hi hai, api call karna jab db websocket data insert hone ka response bheje
      pusher.trigger("messageChannel", "newInserted", {
      from: messageDetails?.from,
      data: messageDetails?.data,
      id: messageDetails?.id,
      date: messageDetails?.date,
      time:  messageDetails?.time,
    });
////////////////////////////////////////////////////////
  }
  });

  


});

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

app.get('/messages/sync', (req, res) => {

      // Messages.find((err, data) => {
      //   if ( err ) {
      //     console.log(err);
      //   } else {
      //     res.status(200).send(data);
      //   }
      // });

      Messages.find().exec()
        .then((data) => {
          res.status(200).send(data);
        }).catch((error) => {
          console.log(error);
        });
});

app.delete( '/messages/filter/retards', (req, res) => {

      Messages.deleteMany({ data: {$exists: true} })
        .then( (data) => {
          res.status(200).send(data);
        }).catch ( (error) => {
          console.log(error);
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

express me get post wale funcitons ki inner understanding pls 
  ya atleast apni type ki blackbox understanding

Creating a websocket on your own

Pusher
  pusher ka kaam bas itna hi hai, api call karna jab db websocket jo yaha backend pe setup hai wo inserted ka message send kare
    web socket ka kaam bhi to ye hi hai ki to and fro data bhejj sake / api call kar sake but frontend application ka execution process koi incoming calls ke liye kahi hosted url pe accessible nahi hota to koi api call ya data send kaise akre 
      to web socket ek network line open karke rakhta hai ( which can be closed ig to save frontend resources when required ) where data can be sent 
        its like the frontend application is now open to api calls from a particular source ( and the specifics of the needs may reslut in a more optimized networking solution/ approach that may be defined as web sockets) 
          warna 2 urls aapas me to api calls kar hi sakte hai 
            (another reason could be , while subscribing the db web socket it may not be too effecient for the frontend )
  Also I just realized ki all operations handled on the backend can also be handled on the frontend side always ( but just to save resources we take that part of the logic off of the frontend and do that part on the backend 
    ( this makes more sense if we consider the backend to have an attached database rather then present backends that are just backend logic and we use external database servers to store and retrieve our data anyways))

*/



