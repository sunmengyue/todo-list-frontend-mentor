import React, { useContext } from 'react';
import TodoContext from '../utils/TodoContext';
import { Link } from 'react-router-dom';

const Navfooter = () => {
  return (
    <div>
      <div>5 active items left </div>
      <div>
        <Link to="/">All</Link>
        <Link to="/todos/active">Active</Link>
        <Link to="/todos/completed">Completed</Link>
      </div>
      <div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default Navfooter;
