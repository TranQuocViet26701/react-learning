import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: 'Sleep',
      status: 'new',
    },
    {
      id: 2,
      name: 'Eat',
      status: 'new',
    },
    {
      id: 3,
      name: 'Study',
      status: 'completed',
    },
    {
      id: 4,
      name: 'Play',
      status: 'new',
    },
  ]);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleTodoClick = (id) => {
    const newTodoList = [...todoList];

    const index = newTodoList.findIndex((todo) => todo.id === id);
    if (index > -1)
      newTodoList[index] = {
        ...newTodoList[index],
        status: newTodoList[index].status === 'new' ? 'completed' : 'new',
      };

    setTodoList(newTodoList);
  };

  const filteredTodoList = todoList.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.status
  );
  return (
    <div>
      <TodoList todoList={filteredTodoList} onTodoClick={handleTodoClick} />
      <button onClick={() => setFilterStatus('all')}>Show All</button>
      <button onClick={() => setFilterStatus('new')}>Show New</button>
      <button onClick={() => setFilterStatus('completed')}>
        Show Completed
      </button>
    </div>
  );
}

export default TodoFeature;
