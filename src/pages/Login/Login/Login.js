import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    // const [user] = useAuthState()

    const from = location.state?.from?.pathname || "/";

    const handleRegisterToggle = () => {
        navigate('/signup')
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const clearFields = event => {
        Array.from(event.target).forEach((e) => (e.value = ""));
    }

    const handleloginForm = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        clearFields(event);
    }

    const handleForgotPassword = async(event) =>{
        const email = event.target.email.value;
       if(email){
        await sendPasswordResetEmail(email);
        toast("Wow so easy!")
       }
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    if (user) {
        navigate('/')
    }


    let errorMessage;
    if (error) {
        errorMessage =
            <p className='text-danger'>{error?.message}</p>
    }


    return (
        <div>
            <div className='w-50 mx-auto my-5'>
                <h1 className='text-center text-warning'> Login </h1>
                <Form onSubmit={handleloginForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    {errorMessage}
                    <ErrorMessage></ErrorMessage>
                    <Button variant="primary" type="submit">
                        LOGIN
                    </Button>
                    <p className='text-primary forget-btn' onClick={handleForgotPassword}>Forgot your Password ?</p>
                </Form>
                <p>Don't Have An Account? <span onClick={handleRegisterToggle} className='toggleToRegister'>Register please</span></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;