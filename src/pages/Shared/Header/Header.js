import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='logo'>
                <Link to='/'>Book House</Link>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/inventories'>Inventories</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;