// import React from 'react';
import './activityWindow.css';
import { loremIpsumText } from '../../../../assets/consants';

function ActivityWindow() {
    return (
        <div className='activityWindow'>
            <div className='scrollMessageDiv'>
              {loremIpsumText}
            </div>
            <div className='bottomContainer'>
                <input type='text' id='messageInputBox' placeholder='Message'/>
            </div>
        </div>
    )
}

export default ActivityWindow;

/*
message sidebar and main activity screen push nahi hui hai 

React jsx is different from pure html tags
  clear example input
*/