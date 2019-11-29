import React from 'react';

import './App.scss';

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
    this.setState({list: [...this.state.list, {todo: this.state.typing[0], style: "show",}]});
    this.setState({typing: []});
    this.setState({placeHolder: <input placeholder="New List Item" onChange={this.typeListItem} />});
  };
  markDone = (index) => {
    this.setState({void: [...this.state.void, index]});
    console.log(index);
    this.state.list.splice(index, 1, {todo: "ITEMDONE", style: "animate-opacityRev",});
    setTimeout(() => {
      const result = this.state.list.filter(undone => undone.todo != "ITEMDONE");
      console.log(result);
      this.setState({list: [...result]});
      this.setState({void: []});
      console.log("I ran");
      console.log(this.state.list);
    }, 799);
  };
/*
  saveRemove = event => {
    for (let i = 0; i < this.state.void.length; i++) {
      console.log(this.state.list[this.state.void[i]]);
      this.state.list.splice(this.state.void[i], 1, {todo: "ITEMDONE", style: "animate-opacityRev toggleHide",});
      console.log(this.state.list[this.state.void[i]]);
    };
    const result = this.state.list.filter(undone => undone.todo != "ITEMDONE");
    console.log(result);
    this.setState({list: [...result]});
    this.setState({void: []});
  };
*/

  render() {
    return (
      <>
      <div className="mainBox">
        <h2>Welcome to your Todo App!</h2>

        <ul className="flexMeList">
        {this.state.list.map(function(item, index ) {
          return (
            <>
            <li onClick={() => this.markDone(index)} key={index} className={item.style}>{item.todo}</li>
            </>
          );
        }.bind( this )  )}{/*need to BIND(this) for it to have conexest in this map*/}
          <li>{this.state.typing[0]}</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>

        <div className="flexMeButtons">
          {this.state.placeHolder}
          <button onClick={this.newListItem}>Add to List</button>
          {/*<button onClick={this.saveRemove}>Save Remove</button>*/}
          <p>Tap list item to mark done</p>
        </div>
      </div>
      {console.log(this.state.void)}
      {console.log(this.state.list)}
      </>
    );
  }
}

export default App;
