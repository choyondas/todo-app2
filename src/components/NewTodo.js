import React, { useState } from 'react';
import './NewTodo.css';
const NewTodo = () => {
    const [todo, setTodo] = useState({ title: '', desc: '' });
    const { title, desc } = todo;


    const handleAddTodo = (e) => {
        e.preventDefault();
        console.log(todo);
        setTodo({title:'', desc:''})
        
        
    }
    const handleSubmit = (e) => {
        const name = e.target.name;
        setTodo({ ...todo, [name]: e.target.value })
        
    }


    return (
      <form onSubmit={handleAddTodo}>
        <h2>Todo App</h2>
        <hr />
        <div className="input">
          <label htmlFor="title">Title: </label>
          <input
            onChange={handleSubmit}
            style={{ marginLeft: "5rem" }}
            type="text"
            id="title"
            name="title"
            value={title}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="title">Description: </label>
          <textarea
            onChange={handleSubmit}
            rows="5"
            cols="33"
            id="desc"
            name="desc"
            value={desc}
            required
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    );
};

export default NewTodo;