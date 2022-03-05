import React from 'react';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';

const HeaderComponents = () => {
    return (
        <div className='header-section'>
            <div className='header-content'>
                <div className='nav-logo'>FriendList</div>
                <div className='nav-search'>
                    <div className='search-input'><input type='text' /></div>
                    <div className='search-icon'><FaSearch /></div>
                    <div className='suggestion-here'></div>
                </div>
                <div className='signin-btn'><FaSignInAlt /></div>
            </div>
        </div>
    );
};

export default HeaderComponents;
