import React from 'react';
import en from '../../../../../../localization';
import './messageCloud.css';

function MessageCloud (props) {

    const {messageObj, sender} = props;
    
    const cssSettler = () => {
        if (messageObj?.from == sender){
            return en.received ;
        } else { 
            return en.sent;
        }
    }
    const messageCss = cssSettler();

    return (
        <div 
        className={messageCss == en.sent ? 'sentOuterContainer' : 'receivedOuterContainer'}
        >
            {messageObj?.data}
        </div>
    );
}

export default MessageCloud;