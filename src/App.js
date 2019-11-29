import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list: [],
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
  };
  markDone = (index) => {
    this.setState({void: [...this.state.void, index]});
  };


  render() {
    return (
      <>
      <div>
        <h2>Welcome to your Todo App!</h2>

        <ul>
        {this.state.list.map(function(item, index) {
          return (
            <>
            <li key={index} className={index}>{item}</li>
            <button onClick={() => this.markDone(index)}>Add to List</button>
            </>
          );
        })}
        {this.state.typing[0]}
        </ul>

        {this.state.placeHolder}
        <button onClick={this.newListItem}>Add to List</button>
        <button onClick={() => this.markDone(2)}>Done</button>
      </div>
      {console.log(this.state.void)}
      </>
    );
  }
}

export default App;
