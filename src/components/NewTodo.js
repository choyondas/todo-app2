import React from 'react';
import './NewTodo.css';
const NewTodo = () => {
    return (
      <form>
        <div className="input">
          <label htmlFor="title">Title: </label>
          <input
            style={{ marginLeft: "5rem" }}
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="input">
          <label htmlFor="title">Description: </label>
          <input
            style={{ marginLeft: "2rem" }}
            type="text"
            id="desc"
            name="desc"
          />
        </div>
      </form>
    );
};

export default NewTodo;