import React from 'react';
import Todos from './Todos';

const Home = () => {


    const data = [
        { title: "read", desc: 'morning at 10 am' },
        {title:'wake up', desc:'morning at 8 am'}
]


    return (
        <div>
            <Todos data={data} />
        </div>
    );
};

export default Home;