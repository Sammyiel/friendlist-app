import React from 'react';
import BottomNavigation from '../bodyComponents/BottomNavigation';
import HeaderComponents from '../headerComponents/HeaderComponents';
import PostTimely from '../uploadComponents/PostTimely';

const PostTimelyOut = () => {
    return (
        <div>
            <HeaderComponents />
            <PostTimely />
            <BottomNavigation />
        </div>
    );
};

export default PostTimelyOut;