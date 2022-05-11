import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const {id} =useParams() 

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'>Book House</Link>
            </div>
            <div className='navbar-links'>
                <Link to='/'>Home</Link>
                <Link to='/inventories'>Inventories</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
                {
                    user?
                   <>
                        <Link to={`/inventory/:${id}`}>Manage books</Link>
                        <Link to='/addbook'>Add Books</Link>
                        <Link to='/mybook'>My Books</Link>
                        <button onClick={handleSignOut}>SignOut</button>
                   </>
                    :
                    <Link to='/login'>Login</Link>}
            </div>
        </div>
    );
};

export default Header;