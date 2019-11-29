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
  saveRemove = event => {
    for (let i = 0; i < this.state.void.length; i++) {
      console.log(this.state.list[this.state.void[i]]);
      this.state.list.splice(this.state.void[i], 1, "ITEMDONE");
      console.log(this.state.list[this.state.void[i]]);
    };
    const result = this.state.list.filter(undone => undone != "ITEMDONE");
    console.log(result);
    this.setState({list: [...result]});
    this.setState({void: []});
  };


  render() {
    return (
      <>
      <div>
        <h2>Welcome to your Todo App!</h2>

        <ul>
        {this.state.list.map(function(item, index ) {
          return (
            <>
            <li key={index} className={index}>{item}</li>
            <button onClick={() => this.markDone(index)}>Button 3</button>
            </>
          );
        }.bind( this )  )}{/*need to BIND(this) for it to have conexest in this map*/}
        {this.state.typing[0]}
        </ul>

        {this.state.placeHolder}
        <button onClick={this.newListItem}>Add to List</button>
        <button onClick={this.saveRemove}>Save Remove</button>
      </div>
      {console.log(this.state.void)}
      {console.log(this.state.list)}
      </>
    );
  }
}

export default App;
