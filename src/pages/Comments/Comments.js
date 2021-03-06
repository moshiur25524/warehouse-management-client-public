import React from 'react';
import boy from '../../../src/Items/Images/boy (1).jpg'

const Comments = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center text-danger'>Comments(3)</h1>
            <div className='d-flex  align-items-center'>
                <div><img className='rounded-circle' src={boy} alt="" /></div>
                <div><p className='fw-bolder'>Maikel Jackson</p></div>
            </div>
            <p>The Alchemist is a fantastic book and the storytelling is beautiful. The choice of words are impeccable, full of wisdom and philosophy . I totally loved it. The story is very enchanting and bursts with optimism which I think is very important in our lives</p>
            <p><small className='text-primary'>reply</small></p>
            <div className='d-flex  align-items-center'>
                <div><img className='rounded-circle' src={boy} alt="" /></div>
                <div><p className='fw-bolder'>Moshiur Rahman</p></div>
            </div>
            <p>The One Minute Manager gives managers three simple tools, which each take 60 seconds or less, but can tremendously improve how they do their job: getting people to stay motivated, happy and deliver great work.</p>
            <p><small className='text-primary'>reply</small></p>
            <div className='d-flex  align-items-center'>
                <div><img className='rounded-circle' src={boy} alt="" /></div>
                <div><p className='fw-bolder'>Nahid Shikder</p></div>
            </div>
            <p>Rich Dad Poor Dad is about Robert Kiyosaki (author) and his two dads—his real father (poor dad) and the father of his best friend (rich dad)—and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you do not need to earn a high income to become rich.</p>
            <p><small className='text-primary'>reply</small></p>
        </div>
    );
};

export default Comments;