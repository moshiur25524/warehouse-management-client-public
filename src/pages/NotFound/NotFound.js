import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='itemsContainer'>
            <h2>oops! Page not Found.</h2>
            <h1>404</h1>
            <p>We can't Find the page you're looking for</p>
            <Link to='/'>Go Back Home</Link>
        </div>
    );
};

export default NotFound;