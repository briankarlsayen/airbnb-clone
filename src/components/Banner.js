import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Banner.css';
import Search from './Search';

function Banner() {
    const [ showSearch, setShowSearch ] = useState(false);
    const history = useHistory();

    return (
        <div className="banner">
            <div className="banner-search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className="banner-searchButton" variant="outlined">{ showSearch ? 'Hide' : 'Seach Dates'}</Button>
            </div>
            <div className="banner-info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={()=> history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner
