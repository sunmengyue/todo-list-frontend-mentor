import React, { useContext } from 'react';
import TodoContext from '../utils/TodoContext';

const Todo = ({ todo }) => {
  const todoData = useContext(TodoContext);
  const { toggleTodo } = todoData;

  return (
    <div>
      <input type="checkbox" onChange={toggleTodo} />
      {todo.content}
    </div>
  );
};

export default Todo;
