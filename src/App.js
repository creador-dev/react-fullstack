
import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  // use state for input and todos
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // add new input ot the existing list
  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className={styles.app}>
      <h1>Welcome to my todo list</h1>
      <form onSubmit={addTodo}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} required/>
        <button type="submit">Add todo</button>
      </form>
      <h2>List of todos</h2>
      {todos.length ? 
        <ul>
          { todos.map(data => (
            <li>{data}</li>
          ))}
        </ul>
      : ''}
    </div>
  );
}

export default App;
