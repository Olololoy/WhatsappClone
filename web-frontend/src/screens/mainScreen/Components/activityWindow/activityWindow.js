// import React from 'react';
import './activityWindow.css';
import { loremIpsumText } from '../../../../assets/consants';
import ChatActivityWindow from '../../../chatScreen/components/chatActivityWindow/chatActivityWindow';

function ActivityWindow() {
    return (
      <div className='activityWindow'>
        <ChatActivityWindow/>
      </div>
    )
}

export default ActivityWindow;

/*
message sidebar and main activity screen push nahi hui hai 

React jsx is different from pure html tags
  clear example input
*/