import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (id) => {
    if (!onTodoClick) return;

    onTodoClick(id);
  };
  return (
    <>
      <h2>Todos:</h2>
      <ul>
        {todoList.map((todo) => {
          return (
            <li
              key={todo.id}
              className={classNames({
                'todo-item': true,
                completed: todo.status === 'completed',
              })}
              onClick={() => handleTodoClick(todo.id)}
            >
              {todo.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
