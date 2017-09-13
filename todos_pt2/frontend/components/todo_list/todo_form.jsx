import React from 'react';
import uniqueId from '../../util/uniqueId';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: 0, title: "", body: "", done: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);

  }

  render() {
    return (
      <div>
        <input id="todoInput" value={this.state.title} onChange={this.updateTitle} ></input>
        <button onClick={this.handleSubmit}>Add Todo</button>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({id: uniqueId()}, ()=>{
      this.props.receiveTodo(this.state);
      this.setState({title: ""});
    });
  }

  updateTitle(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }


}

export default TodoForm;
