import './App.css';
import TodoList from './components/TodoList';

import { useState, useEffect } from 'react';

import { createTodo, getTodos } from './api/endpoints';

import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
      console.log(todos);
    }
    fetchTodos();
  }, []);

  const addTodo = async (todo_name) => {
    createTodo(todo_name);
  }


  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">TODO LIST</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
