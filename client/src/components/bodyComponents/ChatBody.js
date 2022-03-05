import React, { useEffect, useState } from 'react';
import ChatBodyContent from './ChatBodyContent';
import {Link} from 'react-router-dom'

function ChatBody() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5050/users")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
        return (<div className='body-section'>
                    <div className='body-content-wrap'>
                        Error: {error.message}
                    </div>
                </div>);
    } else if (!isLoaded) {
        return (
                <div className='body-section'>
                    <div className='body-content-wrap'>
                        Loading...
                    </div>
                </div>
            );
    } else {

        const results = items.map(item => <ChatBodyContent key={item._id} data={item} />)

        return (
            <div className='body-section'>
                <div className='private-group-div'>
                  <Link to='/chats' className='private-chat-tab'>Private chats</Link>
                  <Link to='/group' className='group-chat-tab'>Group chats</Link>
                </div>
                {results}
            </div>
        );
    }
  }

export default ChatBody;
