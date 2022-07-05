import React from 'react';

const Todo = (props) => {
    const { title, desc } = props.todo;
    
    return (
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default Todo;