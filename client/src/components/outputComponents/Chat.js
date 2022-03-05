import React from 'react';
import BottomNavigation from '../bodyComponents/BottomNavigation';
import HeaderComponents from '../headerComponents/HeaderComponents';
import ChatBody from '../bodyComponents/ChatBody';

const Chat = () => {
    return (
        <div>
            <HeaderComponents />
            <ChatBody />
            <BottomNavigation />
        </div>
    );
};

export default Chat;