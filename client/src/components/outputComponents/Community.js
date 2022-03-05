import React from 'react';
import BottomNavigation from '../bodyComponents/BottomNavigation';
import CommunityBody from '../bodyComponents/CommunityBody';
import HeaderComponents from '../headerComponents/HeaderComponents';

const Community = () => {
    return (
        <div>
            <HeaderComponents />
            <CommunityBody />
            <BottomNavigation />
        </div>
    );
};

export default Community;