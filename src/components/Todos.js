import React, { useContext } from 'react';
import TodoContext from '../utils/TodoContext';
import Todo from './Todo';

const Todos = () => {
  const todosData = useContext(TodoContext);
  const { filteredTodos } = todosData;

  return (
    <div>
      <div className="todo__list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
