import React, { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';

const initTodoList = [
  {
    id: uuid(),
    name: 'Sleep',
    status: 'new',
  },
  {
    id: uuid(),
    name: 'Eat',
    status: 'new',
  },
  {
    id: uuid(),
    name: 'Study',
    status: 'completed',
  },
  {
    id: uuid(),
    name: 'Play',
    status: 'new',
  },
];

function TodoFeature() {
  const [todoList, setTodoList] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const todos = localStorage.getItem('todoList')
      ? JSON.parse(localStorage.getItem('todoList'))
      : initTodoList;

    // console.log(todos);
    setTodoList(todos);
  }, []);

  const handleTodoClick = (id) => {
    const newTodoList = [...todoList];

    const index = newTodoList.findIndex((todo) => todo.id === id);
    if (index > -1)
      newTodoList[index] = {
        ...newTodoList[index],
        status: newTodoList[index].status === 'new' ? 'completed' : 'new',
      };

    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };

  const handleShowTodoClick = (option) => {
    setFilterStatus(option);
  };

  const handleRemoveTodoClick = (id) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };

  const handleAddTodo = (value) => {
    if (!value) return;

    const newTodo = {
      id: uuid(),
      name: value,
      status: 'new',
    };

    const newTodoList = [...todoList];
    newTodoList.unshift(newTodo);

    localStorage.setItem('todoList', JSON.stringify(newTodoList));
    setTodoList(newTodoList);
  };

  const filteredTodoList = todoList.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.status
  );

  return (
    <div className="todo-feature">
      <TodoList
        todoList={filteredTodoList}
        onTodoClick={handleTodoClick}
        onShowTodoClick={handleShowTodoClick}
        onRemoveTodo={handleRemoveTodoClick}
        onAddTodo={handleAddTodo}
      />
    </div>
  );
}

export default TodoFeature;
