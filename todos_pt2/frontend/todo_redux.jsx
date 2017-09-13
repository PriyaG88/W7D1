import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { receiveTodos, receiveTodo, fetchTodos } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';
import getTodos from './util/todo_api_util';

document.addEventListener("DOMContentLoaded", function(){
  console.log(".....");
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});

window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;
window.getTodos = getTodos;
window.fetchTodos = fetchTodos;
