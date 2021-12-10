import styles from './App.module.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const todoInput = useRef();
  const inputTodo = (e) => {
    setTodo((prev) => e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    setTodos((prev) => [todo, ...prev]);
    setTodo('');
  };
  const delTodo = (e) => {
    e.target.parentElement.remove();
  };
  useEffect(() => {
    todoInput.current.focus();
  }, []);
  return (
    <div className={styles.container}>
      <h3>React Todo List</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <span onClick={delTodo}>🗑</span>{' '}
          </li>
        ))}
      </ul>
      <form action="" onSubmit={submitTodo}>
        <input
          type="text"
          value={todo}
          onChange={inputTodo}
          ref={todoInput}
          placeholder="Add a todo"
        />
      </form>
    </div>
  );
}

export default App;
