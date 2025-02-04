import React from 'react';

import './App.scss';

import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';


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
    this.setState({placeHolder: <input placeholder="New List Item" value="" onChange={this.typeListItem} />});
    setTimeout(() => {
      this.setState({placeHolder: <input placeholder="New List Item" onChange={this.typeListItem} />});
      console.log("I ran");
    }, 75);// slopy way to fix value to reset...
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


  render() {
    return (
      <>
      <div className="mainBox">
        <h2>Welcome to your Todo App!</h2>

        <ul className="flexMeList">
        <Todo stateProps={this.state} markDoneProps={this.markDone} />

          <li>{this.state.typing[0]}</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>
      </div>

      <div className="flexMeButtons">
        <TodoForm stateProps={this.state} newListItemProps={this.newListItem} />
        <p>Tap list item to mark done</p>
      </div>
      {console.log(this.state.void)}
      {console.log(this.state.list)}
      </>
    );
  }
}

export default App;







/*
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





        {this.state.list.map(function(item, index ) {
          return (
            <>
            <li onClick={() => this.markDone(index)} key={index} className={item.style}>{item.todo}</li>
            </>
          );
        }.bind( this )  )}
*/


/*
{this.state.placeHolder}
<button onClick={this.newListItem}>Add to List</button>
<p>Tap list item to mark done</p>
*/



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
