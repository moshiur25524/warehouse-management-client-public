import { useEffect, useState } from "react"

const useInventories = () =>{
    const [inventories, setInventories] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setInventories(data))
    },[])
    return [inventories]
}

export default useInventories;