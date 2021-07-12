import React, { useContext } from 'react';
import TodoContext from '../utils/TodoContext';
import { Link } from 'react-router-dom';

const Navfooter = () => {
  const todoData = useContext(TodoContext);
  const { togglePage } = todoData;
  const onTogglePage = (e) => {
    console.log(e.target);
    togglePage(e.target);
  };
  return (
    <div>
      <div>5 active items left </div>
      <ul>
        <li onClick={onTogglePage}>
          <Link to="/">All</Link>
        </li>
        <li onClick={onTogglePage}>
          <Link to="/todos/active">Active</Link>
        </li>
        <li onClick={onTogglePage}>
          <Link to="/todos/completed">Completed</Link>
        </li>
      </ul>
      <div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Navfooter;
