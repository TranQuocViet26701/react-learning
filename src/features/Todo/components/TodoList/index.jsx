import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';
import TodoForm from '../TodoForm';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
  onShowTodoClick: PropTypes.func,
  onRemoveTodo: PropTypes.func,
  onAddTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
  onShowTodoClick: null,
  onRemoveTodo: null,
  onAddTodo: null,
};

function TodoList(props) {
  const { todoList, onTodoClick, onShowTodoClick, onRemoveTodo, onAddTodo } =
    props;
  const [todoText, setTodoText] = useState('');

  const handleChange = (e) => {
    const { target } = e;
    setTodoText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddTodo) onAddTodo(todoText);
    setTodoText('');
  };

  const handleTodoClick = (id) => {
    if (!onTodoClick) return;

    onTodoClick(id);
  };

  const handleShowTodoClick = (option) => {
    if (!onShowTodoClick) return;

    onShowTodoClick(option);
  };

  const handleRemoveTodo = (e, id) => {
    e.preventDefault();
    if (!onRemoveTodo) return;

    onRemoveTodo(id);
  };

  const handleSubmitTodoForm = (values) => {
    if (onAddTodo) onAddTodo(values['title']);
  };

  return (
    <div className="todo-list">
      <h2>todos</h2>
      <TodoForm onSubmit={handleSubmitTodoForm} />
      <ul className="todo-list__todos">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            id="input"
            placeholder="Enter your todo"
            autoComplete="off"
            value={todoText}
            onChange={handleChange}
          />
        </form>

        {todoList.map((todo) => {
          return (
            <li
              key={todo.id}
              className={classNames({
                'todo-item': true,
                completed: todo.status === 'completed',
              })}
              onClick={() => handleTodoClick(todo.id)}
              onContextMenu={(e) => handleRemoveTodo(e, todo.id)}
            >
              {todo.name}
            </li>
          );
        })}
      </ul>
      <small>
        Left click to toggle completed. <br /> Right click to delete todo
      </small>
      <div className="show-btn">
        <button onClick={() => handleShowTodoClick('all')}>Show All</button>
        <button onClick={() => handleShowTodoClick('new')}>Show New</button>
        <button onClick={() => handleShowTodoClick('completed')}>
          Show Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
