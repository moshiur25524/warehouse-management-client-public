import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    const navigate = useNavigate();

    const handleLoginToggle = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const clearFields = event => {
        // we have to convert event.target to array
        // we use from method to convert event.target to array
        // after that we will use forEach function to go through every input to clear it
        Array.from(event.target).forEach((e) => (e.value = ""));
    }

    const handleSignUp = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)

        clearFields(event)
    }

    if (user) {
        navigate('/')
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <h1 className='text-center'>Sign UP</h1>
            <form className='d-flex flex-column mb-5' onSubmit={handleSignUp}>
                <input className='mb-3' type="text" name='name' placeholder='Your Full Name' required />
                <input className='mb-3' type="email" name='email' placeholder='Your Email' required />
                <input className='mb-3' type="password" name="password" placeholder='Your Password' required />
                <input className='mb-3 fw-bold' type="submit" value="SIGN UP" />
            </form>
            <p>Already Have an Account? <span onClick={handleLoginToggle} className='toggleToLogin'>Login please</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;