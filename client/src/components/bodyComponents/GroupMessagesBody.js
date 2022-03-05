import React, { useEffect, useState } from 'react';
import {FaChevronLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import GroupMessagesBodyContent from './GroupMessagesBodyContent';

function GroupMessagesBody() {
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

        const results = items.map(item => <GroupMessagesBodyContent key={item._id} data={item} />)

        return (
            <div className='body-section'>
                <div className='back-arrow-div'>
                    <Link to='/group' className='back-arrow'><FaChevronLeft /></Link>
                </div>
                {results}
            </div>
        );
    }
  }

  export default GroupMessagesBody;
