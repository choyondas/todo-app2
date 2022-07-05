import React from 'react';
import './Todo.css'
const Todo = (props) => {
    const { title, desc } = props.todo;
    
    return (
        <div className="todo">
            
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
};

export default Todo;