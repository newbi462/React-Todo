import React from 'react';

class Todo extends React.Component {


  render() {
    return (
      <>
      {this.props.stateProps.list.map(function(item, index ) {
        return (
          <>
          <li onClick={() => this.props.markDoneProps(index)} key={index} className={item.style}>{item.todo}</li>
          </>
        );
      }.bind( this )  )}{/*need to BIND(this) for it to have conexest in this map*/}
      </>
    );
  }
}

export default Todo;
