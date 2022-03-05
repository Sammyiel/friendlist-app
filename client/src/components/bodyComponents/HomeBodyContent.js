import React from 'react';
import { FaCircle, FaThumbsUp, FaHeart } from 'react-icons/fa';

function HomeBodyContent(props) {
    return (
        <div className='body-content-wrap'>
            <div className='_post-div'>
                <div className='post-title'>
                    Timely invite
                </div>
                <div className='post-content'>
                    <img
                        src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
                        alt='img'
                        width='100%'
                    />
                </div>
                <div className='views-reaction-row'>
                    <div className='date-views'>Posted 2 days ago <FaCircle className='dot'/> 3 days left</div>
                    <div className='reactions'>
                        114 <FaThumbsUp className='reactions-icon'/>
                        78 <FaHeart className='reactions-icon'/>
                    </div>
                </div>
                <div className='post-caption'>
                    <div className='post-username'>
                        {props.data.user_name}
                    </div>
                    I am glad to invite you to an overnight coding camp. Come one come all!! <br />
                    This has to be nice. See you all!!
                </div>
                <div className='_join'>
                    <button>Join</button>
                </div>
            </div>
        </div>
    );
}

export default HomeBodyContent;