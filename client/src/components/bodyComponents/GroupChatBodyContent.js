import React from 'react';
import {Link} from 'react-router-dom'

function GroupChatBodyContent(props) {
    return (
        <Link to='groupchat/:id' className='chat-link'>
            <div className='body-content-wrap'>
                <div className='chat-name'>{props.data.user_name}</div>
                <div className='chat-type'>Group</div>
            </div>
        </Link>
    );
}

export default GroupChatBodyContent;