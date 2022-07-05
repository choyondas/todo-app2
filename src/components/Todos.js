import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    const { data } = props;
    return (
      <div style={{padding:"2rem"}}>
        <h2 style={{textAlign: 'center', padding:'2rem'}}>All Todos Here</h2>
        {data.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </div>
    );
};

export default Todos;