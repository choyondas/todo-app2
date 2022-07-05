import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    const { data } = props;
    return (
        <div>
            {data.map((todo, index)=><Todo key={index} todo={todo} />)}
        </div>
    );
};

export default Todos;