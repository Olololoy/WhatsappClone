import React, {useState, useCallback, useEffect} from 'react';
import SingleChatHeader from './components/singleChatHeader/singleChatHeader';
import {messages, loremIpsumText} from '../../../../assets/consants';
import './chatActivityWindow.css';
import MessageCloud from './components/messageClouds/messageCloud';

function ChatActivityWindow () {

    const {singleText} = messages;

    const [inputMessage, setinputMessage] = useState('');
    const [messageArray, setmessageArray] = useState(singleText?.messageData);
    
    const sender = 'Anusha';
    const receiver = 'Akshat';

    const handleSendClick = () => {
        const obj = {...singleText.messageData[0]};
        obj.data = inputMessage;
        obj.id = `${messageArray.length + 1}`;
        obj.from = receiver;
        //date and time bhi change kar sakte hai;
        const newArr = [...messageArray, obj];
        setmessageArray(newArr);
        setinputMessage('sent');
    }

    const handleRecieveClick = () => {
        const obj = {...singleText.messageData[0]};
        console.log('obj', obj);
        obj.data = inputMessage;
        obj.id = `${messageArray.length + 1}`;
        obj.from = sender;
        //date and time bhi change kar sakte hai;
        setmessageArray([...messageArray, obj]);
        setinputMessage('received');
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
        console.log(messageArray);
    }, [messageArray])

    return (
        <div className='chatActivityWindow'>
            <SingleChatHeader heading={singleText?.from} />
            <div className='scrollViewOuterContainer'>    
                <div className='scrollViewContainer'>
                    {messageArray.map((msgObj) => {
                        return (<MessageCloud messageObj={msgObj} sender={singleText?.from} />)
                    })}
                </div>
            </div>
            <div className='footerContainer'>
                    <input 
                    type='text' 
                    placeholder='Message' 
                    id='mainMessageTextbox' 
                    className='mainMessageInput'
                    value={inputMessage}
                    onChange={handleMessageInput}
                    />
                    <button onClick={handleSendClick} className='sendButton'> Send </button>
                    <button onClick={handleRecieveClick} className='sendButton'> Receive </button>
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