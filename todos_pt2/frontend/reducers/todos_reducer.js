import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      // iterating through action.todos setting a key value pair for each one in the new state.
      action.todos.forEach((todo, idx)=>{
        newState[idx] = todo;
      });
      // return the new state
      return newState;
    case RECEIVE_TODO:
      // Make a new object setting a single key value pair for action.todo
      return merge({}, {[action.todo.id]: action.todo}, state);
    case REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
