const allTodos = ( state ) => {
  return Object.keys(state.todo).map(id => (state.todo[id]));
};

export default allTodos;
