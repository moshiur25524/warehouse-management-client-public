import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>(1)Difference between javaScript and Node.js</h1>
            <p>
               <ul>
                   <li>1. JavaScript is a programming language. And Node.js is a run time of JavaScript.</li>
                   <li>2. JavaScript is mostly run in client side. But it also run in server side. And Node.js is only run in Server side.</li>
                   <li>3. JavaScript is used in Google V8 Engine and is written in C++ And Node.js is written in C, C++ and JavaScript.</li>
                   <li>4. JavaScript is used in Front-End Development and Node.js is used in Back-End Development.</li>
               </ul>
            </p>
            <h1>(2) When should you use nodejs and when should you use mongodb ?</h1>
            <p>Node.js: Node.js is used in Back-End server side. It is a run time of javaScript. Node.js is Mainly used to Connect with Client side to Database. 
            MongoDb: MongoDb is one kind of Database. It's main purpose is to collect data from client side, send data to Client at the time of need. MongoDb can Update data and Delete Data. Node.js help to connect client and mongodb.
            </p>
            <h1>(3) Differences between sql and nosql databases.</h1>
            <ul>
                <li>1. SQL is a Tabular database. And NoSQL is nonTabular database.</li>
                <li>2. SQL data operation must be organized. And NoSQl data can be organized as developer want.</li>
                <li>3. SQL databases are vertically scalable and NoSQL databases are horizontally scalable. </li>
                <li>4. SQL database  is better for multi-row transactions and NoSQL is better for unstructured data like JSON.</li>
            </ul>
        </div>
    );
};

export default Blogs;