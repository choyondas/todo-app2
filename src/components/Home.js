import React from 'react';
import Todos from './Todos';
import './Home.css';

const Home = () => {


    const data = [
        { title: "read", desc: 'morning at 10 am' },
        {title:'wake up', desc:'morning at 8 am'}
]


    return (
        <div className="home">
            <Todos data={data} />
        </div>
    );
};

export default Home;