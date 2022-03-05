import React from 'react';
import BottomNavigation from '../bodyComponents/BottomNavigation';
import MessagesBody from '../bodyComponents/MessagesBody';
import HeaderComponents from '../headerComponents/HeaderComponents';

const Messages = () => {
    return (
        <div>
            <HeaderComponents />
            <MessagesBody />
            <BottomNavigation />
        </div>
    );
};

export default Messages;