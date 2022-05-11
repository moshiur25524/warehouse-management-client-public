import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Inventory from '../Shared/Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([])

    const location = useLocation()
    
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])
    // const [inventories] = useInventories()
    if(location){
        inventories.slice(0,6)
    }
    return (
        <div className='container'>
            <h1 className='text-center text-warning'>All Books</h1>
            <div className='inventories'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory= {inventory}
                        ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;