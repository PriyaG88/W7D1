import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }

  render(){

    return (
      <li>{this.title}</li>
    );
  }
}

export default TodoListItem;
