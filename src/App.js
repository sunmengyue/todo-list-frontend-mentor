import './App.css';
import React, { useState, useEffect } from 'react';
import TodoContext from './utils/TodoContext';
import TypingBar from './components/TypingBar';
import Navfooter from './components/Navfooter';
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [page, setPage] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    //eslint-disable-next-line
  }, [todos, page]);

  function filterHandler() {
    switch (page) {
      case 'Active':
        let activeTodos = todos.filter((todo) => todo.isCompleted === false);
        setFilteredTodos(activeTodos);
        break;
      case 'Completed':
        let completedTodos = todos.filter((todo) => todo.isCompleted === true);
        setFilteredTodos(completedTodos);
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function addTodo(newTodoText) {
    setTodos([
      ...todos,
      { id: Math.random() * 1000, content: newTodoText, isCompleted: false },
    ]);
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );
    setTodos(updatedTodos);
  }

  function togglePage(link) {
    setPage(link.innerText);
  }

  return (
    <Router>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
          filteredTodos,
          text,
          togglePage,
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
