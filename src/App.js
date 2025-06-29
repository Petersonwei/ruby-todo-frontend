import './App.css';
import TodoList from './components/TodoList';

import { useState, useEffect } from 'react';

import { create_todo, get_todos, delete_todo } from './api/endpoints';

import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await get_todos();
      setTodos(todos);
      console.log(todos);
    }
    fetchTodos();
  }, []);

  // Function to add a new todo item
  const addTodo = async (todo_name) => {
    // Call the createTodo function to add the new todo item to the backend
    const todo = await create_todo(todo_name);
    // Update the local state with the new todo item by appending it to the existing list of todos
    setTodos([...todos, todo]);
  }

  const deleteTodo = async (id) => {
    await delete_todo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">TODO LIST</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
