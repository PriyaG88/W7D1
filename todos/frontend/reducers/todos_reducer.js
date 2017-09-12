import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      // iterating through action.todos setting a key value pair for each one in the new state.
      action.todos.forEach((todo, idx)=>{
        newState[idx] = todo;
      });
      // return the new state
      return newState;
    case RECEIVE_TODO:
      // Make a new object setting a single key value pair for action.todo
      const s = {};
      const idx = action.todo.id;
      s[idx] = action.todo;
      return merge(s, state);

    case REMOVE_TODO:

      break;

      // Return a new state object by merging your previous state and your new object
    default:
      return state;
  }
};

export default todosReducer;
