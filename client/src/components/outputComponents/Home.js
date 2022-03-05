import React from 'react';
import BottomNavigation from '../bodyComponents/BottomNavigation';
import HeaderComponents from '../headerComponents/HeaderComponents';
import HomeBody from '../bodyComponents/HomeBody';


const Home = () => {
    return (
        <div>
            <HeaderComponents />
            <HomeBody />
            <BottomNavigation />
        </div>
    );
};

export default Home;