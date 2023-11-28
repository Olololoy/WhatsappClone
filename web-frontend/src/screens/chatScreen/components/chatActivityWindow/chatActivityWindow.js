import React, {useState, useCallback, useEffect} from 'react';
import SingleChatHeader from './components/singleChatHeader/singleChatHeader';
import {messages, loremIpsumText} from '../../../../assets/consants';
import './chatActivityWindow.css';
import MessageCloud from './components/messageClouds/messageCloud';
import Pusher from 'pusher-js';
import axios from '../../../../utils/axios/axios.js';

function ChatActivityWindow () {

    const {singleText} = messages;

    const [inputMessage, setinputMessage] = useState('');
    const [messageArray, setmessageArray] = useState(singleText?.messageData);
    const [placehoderMessage, setplaceholderMessage] = useState('Message');
    const [fetchedData, setfetchedData] = useState('');
    
    const sender = 'Anusha';
    const receiver = 'Akshat';

      
  useEffect(() => {

    const pusher = new Pusher('4eb069f1dce0c1999f5d', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messageChannel');
    channel.bind('newInserted', (data) => {
        JSON.stringify(data);
        setmessageArray([...messageArray, data]);
      alert(JSON.stringify(data));
    });
    
    console.log('getting mounted');    
        // why two renders ( doesn't really matter tho for now)

//doubt ( iss variable ko stay kaise kara rhe hai ?? ) vvimp could use some js 
   return (() => {
    console.log('i am getting unmounted');

    channel.unbind_all();
    channel.unsubscribe();
    // jab bas useeffect call pe wo create hoke destroy ho hi jaayega for sure bas bindings rahengi ??
        // similarly iss callback ko channel ka variable kaise available hai ???
            // waise to ye hai to same hi function ka part to immediately available to hai ye variable but baad me kaise availbale raghega ye dekhna padega 
                // ig easy basic explanaiton with closures
    }); 
    }, [messageArray]);

// useeffect me to callback function send ho jaata hai
    // par set messages wala jo function to uss execution space me available ho ya na ho coz setmessages wala function to iss component function me hi available hai 
        // ( jab component mount hota hai to uske functions bhi kisi common space me available rehte hai kya ??)
            //set messages wala function ka reference jo kisi aur execution space me active hai wo send hota hai ( ya bas function call kabhi bh kaise work karta hai )
                // ye samajhne me itni problem isliye aa rhi hai coz of strong boundations of cpp



    // useEffect(()=>{
    //   const fetchData = async () => {
    //     try {
    //       // const response = await fetch('http://localhost:9000/');
    //       const response = await fetch('http://localhost:9000/messages/sync', { mode: 'no-cors' });
        
    //         // const response = await fetch('https://api.example.com/data');
            
    //         // const response = await fetch('https://api.github.com/users/xiaotian/repos');
    //       console.log('processed till here');
    //       console.log(response);

    //       const result = await response.json();
    //       // setinputMessage(result);
    //     //   console.log(result);

    //     } catch (error) {
    //       console.log('Error fetching data:', error);
    //     }
    //   };
    //   fetchData();
    // } , []);

    useEffect(()=>{
        axios.get('/messages/sync')
            .then( (res => {
                console.log(res.data);
                setmessageArray(res.data);
            }));
            // iska callback implementation kaise hota ??
            //agar seedha usestate me update karna padta ( call back me to code axios ko send hota na wo idhar thodi rehta )
            // to use state aur set state kaise accessible hota usko and fir uss setstate ke result se rerneder kaise trigger hote ?? 
        } , []);

    const postMessageToDB  = (obj) => {
        axios.post('/messages/new', obj)
            .then((res) => {
                console.log(res);
            });

    }

    const handleSendClick = () => {
        const obj = {...singleText.messageData[0]};
        obj.data = inputMessage;
        obj.id = `${messageArray.length + 1}`;
        obj.from = receiver;
        //date and time bhi change kar sakte hai;
        // const newArr = [...messageArray, obj];
        postMessageToDB(obj);
        // setmessageArray(newArr);
        setplaceholderMessage('sent');
        setinputMessage('');
    }

    const handleRecieveClick = () => {
        const obj = {...singleText.messageData[0]};
        console.log('obj', obj);
        obj.data = inputMessage;
        obj.id = `${messageArray.length + 1}`;
        obj.from = sender;
        //date and time bhi change kar sakte hai;
        // setmessageArray([...messageArray, obj]);
        postMessageToDB(obj);
        setplaceholderMessage('received');
        setinputMessage('');
    }

    const handleMessageInput = (msg) => {
        setinputMessage(msg.target.value);
    }

    const TextboxFooter = () => {
        return (
            <></>
        );
    }

    useEffect(() => {
        // console.log(messageArray);
    }, [messageArray])

    return (
        <div className='chatActivityWindow'>
            <SingleChatHeader heading={singleText?.from} />
            <div className='scrollViewOuterContainer'>    
                <div className='scrollViewContainer'>
                    {messageArray.map((msgObj) => {
                        return (<MessageCloud messageObj={msgObj} sender={singleText?.from} key={msgObj.id} />)
                    })}
                    {/* <MessageCloud messageObj={msgObj} sender={singleText?.from} /> */}
                </div>
            </div>
            <div className='footerContainer'>
                    <input 
                    type='text' 
                    placeholder={placehoderMessage}
                    id='mainMessageTextbox' 
                    className='mainMessageInput'
                    value={inputMessage}
                    onChange={handleMessageInput}
                    />
                    <button onClick={handleSendClick} className='sendButton'> Send </button>
                    <button onClick={handleRecieveClick} className='receiveButton'> Receive </button>
            </div>
        </div>
    )
}

export default ChatActivityWindow;

/*
scroll not handled
handling enter as send 
    handling shift enter as line break
        input box getting bigger and shifting upwards for extra content
            e.target.value se handle kar sakte hai ig

*/