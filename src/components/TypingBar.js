import React, { useContext } from 'react';
import TodoContext from '../utils/TodoContext';

const TypingBar = () => {
  const todosData = useContext(TodoContext);
  const { text, setText, addTodo } = todosData;
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit"> Add</button>
      </form>
    </div>
  );
};

export default TypingBar;
