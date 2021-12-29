import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import TodoList from '../../components/TodoList';

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

function ListPage() {
  const location = useLocation();
  const match = useRouteMatch();
  const history = useHistory();

  // State
  const [todoList, setTodoList] = useState([]);
  const [filterStatus, setFilterStatus] = useState(() => {
    // get from url
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const todos = localStorage.getItem('todoList')
      ? JSON.parse(localStorage.getItem('todoList'))
      : initTodoList;

    // console.log(todos);
    setTodoList(todos);
  }, []);

  // get status state from url
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

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
    const params = {
      status: option,
    };

    history.push({
      pathname: match.path,
      search: queryString.stringify(params),
    });
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

  const filteredTodoList = useMemo(
    () =>
      todoList.filter(
        (todo) => filterStatus === 'all' || filterStatus === todo.status
      ),
    [todoList, filterStatus]
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

export default ListPage;
