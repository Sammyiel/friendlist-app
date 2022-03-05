import React, { useEffect, useState } from 'react';
import CommunityBodyContent from './CommunityBodyContent';
import {FaPlus} from 'react-icons/fa'

function CommunityBody() {
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

        const results = items.map(item => <CommunityBodyContent key={item._id} data={item} />)

        return (
            <div className='body-section'>
                <button className='create-community-button'><FaPlus /> Create a community</button>
                {results}
            </div>
        );
    }
  }

export default CommunityBody;
