import './App.css';
import TodoList from './components/TodoList';

import { useState, useEffect } from 'react';

import { getTodos } from './api/endpoints';

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

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">TODO LIST</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
