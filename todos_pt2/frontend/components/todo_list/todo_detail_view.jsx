import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: props.body};
  }

  render () {
    return (
      <h3>{this.state.body}</h3>
    );
  }
}

export default TodoDetailView;
