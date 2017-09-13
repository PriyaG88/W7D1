export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

const receiveTodos = (todos) => {
  return {
    type: RECEIVE_STEPS,
    todos
  };
};

const receiveTodo = (todo) => {
  return {
    type: RECEIVE_STEP,
    todo
  };
};

const removeTodo = (todo) => {
  return {
    type: REMOVE_STEP,
    todo
  };
};

export {receiveTodo, receiveTodos, removeTodo};
