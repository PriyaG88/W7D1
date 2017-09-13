import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    // this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateDetail = this.updateDetail.bind(this);
    this.state = {id: props.id, title: props.title, body: props.body, done: props.done, detail: false};
  }
  //
  // handleRemove(e) {
  //   e.preventDefault();
  //   this.props.removeTodo(this.state);
  // }

  handleUpdate(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({done: !this.state.done});
    this.props.receiveTodo(this.state);
  }

  updateDetail(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  render () {

    let status = this.state.done ? "done" : "undone";
    let result = this.state.detail ? <TodoDetailView body={this.state.body}/> : "";
    // <button onClick={this.handleRemove}>Remove</button>

    return (
      <div>
        <li>
          <h3 onClick={this.updateDetail}>{this.state.title}</h3>
          <button onClick={this.handleUpdate}>{status}</button>
          { result }
        </li>

     </div>
    );
  }
}

export default TodoListItem;
