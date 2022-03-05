import React from 'react';

function CommunityBodyContent(props) {
    return (
        <div className='community-list'>
            <div className='body-content-wrap'>
                <div className='community-name'>{props.data.user_name}</div>
                <button className='join-community-button'>Join community</button>
            </div>
        </div>
    );
}

export default CommunityBodyContent;