import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ManageBook = () => {

    function clearFields(event) {
        Array.from(event.target).forEach((e) => (e.value = ""));
    }

    const handleloginForm = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email }
        console.log(name, email);
        clearFields(event);

        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
        alert('The books are adding')
    }


    return (
        <div className='w-50 mx-auto my-5'>
            <h1 className='text-center text-warning'>Add More Books</h1>
            <Form onSubmit={handleloginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='name' placeholder="Enter Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    ADD BOOK
                </Button>
            </Form>
        </div>
    );
};

export default ManageBook;