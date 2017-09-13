import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    console.log("rendering...");
    const result = Object.keys(this.props.todos).map((key)=>{
      return this.props.todos[key];
    });

    return (
      <div>
        <TodoForm receiveTodo={this.props.receiveTodo} />
        <ul>
          {result.map((prop)=>{
            return <TodoListItem
                      key={prop.id}
                      id={prop.id}
                      title={prop.title}
                      body={prop.body}
                      done={prop.done}
                      removeTodo={this.props.removeTodo}
                      receiveTodo={this.props.receiveTodo}
                  />;
          })}
        </ul>
      </div>
    );
  }

   componentDidMount() {
    this.props.fetchTodos();
   }
}

export default TodoList;
