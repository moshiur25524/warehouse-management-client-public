import React, { useEffect, useState } from 'react';
import useInventories from '../CustomHook/useInventories';

const Inventories = () => {
    const [inventories, setInventories] = useState([])
    
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])
    // const [inventories] = useInventories()
    return (
        <div>
            <h1>This is Inventories Page: {inventories.length}</h1>
        </div>
    );
};

export default Inventories;