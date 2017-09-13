import APIUtil from '../util/todo_api_util';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

const fetchTodos = () => (dispatch) => {
  // return APIUtil.then(dispatch(receiveTodos));
  // APIUtil.fetchTodos().then((todos)=>{
  //   console.log(todos);
  //   // dispatch(receiveTodos(todos));
  // });
  APIUtil().then((todos)=>{
    // console.log(receiveTodo(todos));
    dispatch(receiveTodos(todos));
  });
};
//
// function fetchTodos() {
//   function (dispatch) {
//
//   }
// }


export {receiveTodo, receiveTodos, removeTodo, fetchTodos};
