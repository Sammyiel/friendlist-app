import React from 'react';
import BottomNavigation from '../bodyComponents/BottomNavigation';
import GroupMessagesBody from '../bodyComponents/GroupMessagesBody';
import HeaderComponents from '../headerComponents/HeaderComponents';

const GroupMessages = () => {
    return (
        <div>
            <HeaderComponents />
            <GroupMessagesBody />
            <BottomNavigation />
        </div>
    );
};

export default GroupMessages;