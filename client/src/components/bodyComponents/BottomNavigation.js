import React from 'react';
import { FaTelegram, FaClock, FaComment, FaGlobeAfrica } from 'react-icons/fa';
import { Link } from "react-router-dom";

const BottomNavigation = () => {
    return (
        <div className='bottom-navigation'>
            <div className='bottom-nav-content'>
                <div>
                    <Link to="/timely"><FaClock /></Link>
                </div>
                <div>
                    <Link to="/posts"><FaTelegram /></Link>
                </div>
                <div>
                    <Link to="/chats"><FaComment /></Link>
                </div>
                <div>
                    <Link to="/community"><FaGlobeAfrica /></Link>
                </div>
            </div>
        </div>
    );
};

// import React from 'react';
// import {Routes, Route} from 'react-router-dom';
// //
// import Register from '../bodyComponents/Register'
// import LoginMethods from '../bodyComponents/LoginMethods'
// import Home from '../bodyComponents/Home'
// import Slideshow from '../bodyComponents/SlideShow';

// const AllRoutes = () => {
//   return (
//     <>
//       <div className="app-container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/slideshow" element={<Slideshow />} />
//           <Route path="/login" element={<><LoginMethods /></>} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </div>
//     </>
//   )
// };

// export default AllRoutes;

export default BottomNavigation;