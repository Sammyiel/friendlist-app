import React from 'react';

function MessagesBodyContent(props) {
    return (
        <div className='messages-body'>
            <div className='sender-message'>
                <div className='sender-name'>
                    {props.data.user_name}
                </div>
                <div className='chat-bubble'>
                    Messages here  Messages here  Messages here  Messages here  Messages here  Messages here  Messages here  Messages here  Messages here
                </div>
            </div>
        </div>
    );
}

export default MessagesBodyContent;