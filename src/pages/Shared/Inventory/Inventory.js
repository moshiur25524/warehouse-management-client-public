import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { _id, img, name, price, description, quantity, supplier } = inventory;

    const navigate= useNavigate()

    const handleUpdateButton = id =>{
        navigate( `/inventory/${id}`)
    }

    return (
        <div className='inventory'>
            <img src={img} alt="" />
            <h1 title={name}>{name}</h1>
            <p>{description}</p>
            <p>Price: $ {price}</p>
            <p><small>Quantity: {quantity}</small></p>
            <p><small>Supplier: {supplier}</small></p>
        
                <button onClick={()=>handleUpdateButton(_id)}>Update Book</button>
           
        </div>
    );
};

export default Inventory;