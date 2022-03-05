import React from 'react';
import {Link} from 'react-router-dom'

function ChatBodyContent(props) {
    return (
        <Link to='conversation/:id' className='chat-link'>
            <div className='body-content-wrap'>
                <div className='chat-name'>{props.data.user_name}</div>
                <div className='chat-type'>Private</div>
            </div>
        </Link>
    );
}

export default ChatBodyContent;