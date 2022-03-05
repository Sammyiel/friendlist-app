import React from 'react';
import BottomNavigation from '../bodyComponents/BottomNavigation';
import HeaderComponents from '../headerComponents/HeaderComponents';
import GroupChatBody from '../bodyComponents/GroupChatBody';

const GroupChat = () => {
    return (
        <div>
            <HeaderComponents />
            <GroupChatBody />
            <BottomNavigation />
        </div>
    );
};

export default GroupChat;