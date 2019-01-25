import React, { Component } from "react";
import TodoList from "./TodoList";
import "../../scss/TodoApp.scss";
export default class TodoApp extends Component {
  //
  constructor(props) {
    //"props" is unavailable to constructor, so to use it, we pass it as an argument to constructor and base/parent class
    //whenever we call any component's constructor, make sure to call the constructor of its parent using super()
    super(props);
    //Only in constructor, we can set the state directly like below:
    this.state = {
      items: [],
      text: ""
    };
    //For methods with object reference, 'this' refers to the object
    //For methods w/o object reference, 'this' is undefined.
    //So we bind the event handlers such that they refer to the window object

    //BINDING EVENT HANDLERS
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.markItemCompleted = this.markItemCompleted.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    //Standard way to bind event handlers
  }
  //Stand-alone Functions w/o Object Reference
  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }
  handleAddItem(event) {
    event.preventDefault();

    var newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ""
    }));
  }
  markItemCompleted(itemId) {
    var updatedItems = this.state.items.map(item => {
      if (itemId === item.id) item.done = !item.done;

      return item;
    });

    // State Updates are Merged
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  handleDeleteItem(itemId) {
    var updatedItems = this.state.items.filter(item => {
      return item.id !== itemId;
    });

    this.setState({
      items: [].concat(updatedItems)
    });
  }

  render() {
    return (
      <div>
        <h3 className="apptitle">MY TO DO LIST</h3>
        <div className="row">
          <div className="col-md-3">
            <TodoList
              items={this.state.items}
              onItemCompleted={this.markItemCompleted}
              onDeleteItem={this.handleDeleteItem}
            />
          </div>
        </div>
        <form className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              onChange={this.handleTextChange}
              value={this.state.text}
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary"
              onClick={this.handleAddItem}
              disabled={!this.state.text}
            >
              {"Add #" + (this.state.items.length + 1)}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
