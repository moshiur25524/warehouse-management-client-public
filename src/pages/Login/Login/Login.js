import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SocialLogin from '../SocialLogin/SocialLogin';
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

    if (loading) {
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
                <h1 className='text-center'> Login </h1>
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
                </Form>
                <p>Don't Have An Account? <span onClick={handleRegisterToggle} className='toggleToRegister'>Register please</span></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;