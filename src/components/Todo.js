import React, { useContext } from 'react';
import TodoContext from '../utils/TodoContext';

const Todo = ({ todo }) => {
  const todoData = useContext(TodoContext);
  const { toggleTodo } = todoData;
  const onChangeToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={onChangeToggle}
        checked={todo.isCompleted}
      />
      {todo.content}
    </div>
  );
};

export default Todo;
