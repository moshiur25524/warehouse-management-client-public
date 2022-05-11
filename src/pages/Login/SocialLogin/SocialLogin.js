import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../Items/Images/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
import github from '../../../Items/Images/github_PNG83.png'
import facebook from '../../../Items/Images/images.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    const handleGoogleSingin = () =>{
        signInWithGoogle()
    }
    const handleGithub = () =>{
        signInWithGithub()
    }

    // let errorMessage;
    // if (error) {
    //     errorMessage =
    //         <p className='text-danger'>{error?.message}</p>
    // }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center '>
            
                <div>________________</div>
                <span className='mx-3'>or use one these options</span>
                <div>_________________</div>
            </div>
            <div>
                <Button onClick={handleGoogleSingin} variant="info"> <img src={google} width={30} alt="" /> Google Signin</Button>{' '}
                <Button onClick={handleGithub} variant="warning"> <img src={github} width={30} alt="" /> GitHub signin</Button>{' '}
                <Button variant="primary"> <img src={facebook} width={30} alt="" /> Facebook signin</Button>{' '}
            </div>
        </div>
    );
};

export default SocialLogin;