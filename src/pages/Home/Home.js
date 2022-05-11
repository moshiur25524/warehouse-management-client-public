import React from 'react';
import Banner from '../Banner/Banner';
import BestAuthor from '../BestAuthor/BestAuthor';
import Comments from '../Comments/Comments';
import Inventories from '../Inventories/Inventories';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Inventories></Inventories>
            <BestAuthor></BestAuthor>
            <Comments></Comments>
        </div>
    );
};

export default Home;