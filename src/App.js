import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list: [0,1,2],
      typing: [],
      void: [],
    };
  }


  // design `App` to be the parent component of your application.


  // this component is going to take care of state, and any change handlers you need to work with your state
  newlistItem = foobarBannaEvent => {
    this.setState({list: [...this.state.list, foobarBannaEvent.target.value]});
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
        </ul>

        <input onChange={this.newlistItem} />
      </div>
      </>
    );
  }
}

export default App;
