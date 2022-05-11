import React from 'react';
import author from '../../../src/Items/Images/best author (1).jpg'

const BestAuthor = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center text-danger border border-bottom-0 border-warning'>Best Author of the week</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <div><img src={author} alt="" /></div>
                <div className=''>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1>Dwayne Johnson</h1>
                        <p><small>-author</small></p>
                    </div>
                    <div>
                        <p>"Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestAuthor;