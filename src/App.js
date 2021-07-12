import './App.css';
import React, { useState, useEffect } from 'react';
import TodoContext from './utils/TodoContext';
import TypingBar from './components/TypingBar';
import Navfooter from './components/Navfooter';
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  function filterHandler() {
    switch (window.location.pathname) {
      case '/todos/active':
        setFilteredTodos(() => {
          todos.filter((todo) => todo.isCompleted === false);
        });
        break;
      case '/todos/completed':
        setFilteredTodos(() => {
          todos.filter((todo) => todo.isCompleted === true);
        });
        break;
      default:
        return todos;
    }
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      // return todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo;
      return todo;
    });
    setTodos(updatedTodos);
  }

  function addTodo() {
    setTodos([
      ...todos,
      { id: Math.random() * 1000, content: text, isCompleted: false },
    ]);
  }

  return (
    <Router>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
          text,
          setText,
          addTodo,
          toggleTodo,
        }}
      >
        <div className="App">
          <TypingBar />
          <Switch>
            <Router path="/" exact>
              <All />
            </Router>
            <Router path="/todos/active">
              <Active />
            </Router>
            <Route path="/todos/completed">
              <Completed />
            </Route>
          </Switch>
          <Navfooter />
        </div>
      </TodoContext.Provider>
    </Router>
  );
}

export default App;

// 1. create all, active, and completed page
// 2. delete completed tasks
// 3. change the order each todo in the active page
// 4. when refresh our page, our todos are still rendering
