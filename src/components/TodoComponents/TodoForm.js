import React from 'react';

class TodoForm extends React.Component {


  render() {
    return (
      <>
      {this.props.stateProps.placeHolder}
      <button onClick={this.props.newListItemProps}>Add to List</button>
      {/*<button onClick={this.saveRemove}>Save Remove</button>*/}
      </>
    );
  }
}

export default TodoForm;
