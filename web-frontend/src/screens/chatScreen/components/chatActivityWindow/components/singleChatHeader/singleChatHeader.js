import React from 'react';
import './singleChatHeader.css'
import { messages } from '../../../../../../assets/consants';

function SingleChatHeaderExtra () {
    return (
        <div className='outerContainer'>
            <div className='profileNHeading'>
                <div className='profileContainer'>
                
                </div>
                <div className='headingOuterContainer'>
                    <div className='headingContainer'>
            
                    </div>
                    <div className='informationTextContainer'>
            
                    </div>
                </div>
            </div>
            <div className='optionsContainer'>
            
            </div>
        </div>
    );
}

function SingleChatHeader (props) {
    const {heading} = props;
    
    return (
        <div className='outerContainer'>
            <div className='headingContainer'>
                <h2>
                    {heading}
                </h2>
            </div>
        </div>
    );
}

export default SingleChatHeader;
