import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from '../outputComponents/Chat';
import Community from '../outputComponents/Community';
import GroupChat from '../outputComponents/GroupChat';
import GroupMessages from '../outputComponents/GroupMessages';
import Home from '../outputComponents/Home';
import Messages from '../outputComponents/Messages';
import PostTimelyOut from '../outputComponents/PostTimelyOut';
import TimelyInvites from '../outputComponents/TimelyInvites';

const AllRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TimelyInvites />} />
                    <Route path="/posts" element={<Home />} />
                    <Route path="/timely" element={<TimelyInvites />} />
                    <Route path="/chats" element={<Chat />} />
                    <Route path="/group" element={<GroupChat />} />
                    <Route path="/community" element={<Community />} />           
                    <Route path="/chats/conversation/:id" element={<Messages />} />           
                    <Route path="/group/groupchat/:id" element={<GroupMessages />} />           
                    <Route path="/post/timely" element={<PostTimelyOut />} />           
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AllRoutes;