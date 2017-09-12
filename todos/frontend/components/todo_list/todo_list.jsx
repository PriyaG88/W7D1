import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const result = Object.keys(this.props.todos).map((key)=>{
      return this.props.todos[key];
    });


    return (
      <div>
        <TodoForm receiveTodo={this.props.receiveTodo} />
        <ul>
          {result.map((prop)=>{
            return <TodoListItem key={prop.id} title={prop.title} body={prop.body}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
