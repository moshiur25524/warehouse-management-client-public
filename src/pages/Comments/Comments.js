import React from 'react';
import boy from '../../../src/Items/Images/boy (1).jpg'

const Comments = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-danger'>Comments(3)</h1>
            <div className='d-flex  align-items-center'>
                <div><img className='rounded-circle' src={boy} alt="" /></div>
                <div><p className='fw-bolder'>Maikel Jackson</p></div>
            </div>
            <p>The Alchemist is a fantastic book and the storytelling is beautiful. The choice of words are impeccable, full of wisdom and philosophy . I totally loved it. The story is very enchanting and bursts with optimism which I think is very important in our lives</p>
            <p><small className='text-primary'>reply</small></p>
            <div className='d-flex  align-items-center'>
                <div><img className='rounded-circle' src={boy} alt="" /></div>
                <div><p className='fw-bolder'>Maikel Jackson</p></div>
            </div>
            <p>The Alchemist is a fantastic book and the storytelling is beautiful. The choice of words are impeccable, full of wisdom and philosophy . I totally loved it. The story is very enchanting and bursts with optimism which I think is very important in our lives</p>
            <p><small className='text-primary'>reply</small></p>
            <div className='d-flex  align-items-center'>
                <div><img className='rounded-circle' src={boy} alt="" /></div>
                <div><p className='fw-bolder'>Maikel Jackson</p></div>
            </div>
            <p>The Alchemist is a fantastic book and the storytelling is beautiful. The choice of words are impeccable, full of wisdom and philosophy . I totally loved it. The story is very enchanting and bursts with optimism which I think is very important in our lives</p>
            <p><small className='text-primary'>reply</small></p>
        </div>
    );
};

export default Comments;