import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ErrorMessage = () => {
    const [user, loading, error] = useAuthState(auth);
    let errorMessage;
    if (error) {
        errorMessage =
            <p className='text-danger'>{error?.message}</p>
    }
    return (
        <div>
            <p>{errorMessage}</p>
        </div>
    );
};

export default ErrorMessage;