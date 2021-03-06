import { connect } from 'react-redux';
import allTodos from '../../reducers/selectors';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

const TodoDetailViewContainer = connect(null, mapDispatchToProps)(TodoDetailView);

export default TodoDetailViewContainer;
