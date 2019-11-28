import React, { useEffect } from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list: [0,1,2],
      typing: [],
      void: [],
      placeHolder: <input placeholder="New List Item" onChange={this.typeListItem} />,
    };
  };

  // design `App` to be the parent component of your application.


  // this component is going to take care of state, and any change handlers you need to work with your state
  typeListItem = foobarBannaEvent => {
    this.setState({typing: [foobarBannaEvent.target.value]});
  };
  newListItem = foobarBannaEvent => {
    this.setState({list: [...this.state.list, this.state.typing[0]]});
    this.setState({typing: []});
    this.setState({placeHolder: <input placeholder="New List Item" onChange={this.typeListItem} />});
    this.state.placeHolder.input.reset();
  };



  render() {
    return (
      <>
      <div>
        <h2>Welcome to your Todo App!</h2>

        <ul>
        {this.state.list.map(function(item) {
          return <li>{item}</li>;
        })}
        {this.state.typing[0]}
        </ul>

        {this.state.placeHolder}
        <button onClick={this.newListItem}>Add to List</button>
      </div>
      </>
    );
  }
}

export default App;
