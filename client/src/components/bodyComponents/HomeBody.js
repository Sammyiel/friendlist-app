import React, { useEffect, useState } from 'react';
import HomeBodyContent from './HomeBodyContent';
import {FaPlus} from 'react-icons/fa'

function HomeBody() {
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

        const results = items.map(item => <HomeBodyContent key={item._id} data={item} />)

        return (
            <div className='body-section'>
                <button className='create-timely-button'><FaPlus /> Create a post</button>
                {results}
            </div>
        );
    }
  }

  export default HomeBody;
