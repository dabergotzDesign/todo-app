import React from "react";
import Header from "./header";
import ToDoList from "./todo-list";
import ToDoForm from "./todo-form";
import ToDoFilter from "./todo-filter";
//import uuid from "uuid/v4";
//import { getRandomTagline } from "../helpers.js";
//import Storage from "../modules/storage";

class App extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.storageKey = "react-todo";
    const old = Storage.get(this.storageKey);

    if (old) {
      this.state = JSON.parse(old);
    } else {
      this.state = {
        toDoItems: {},
        filter: "undone"
      };
      // Storage.set(this.storageKey, JSON.stringify(this.state));
    }
  }

  componentDidUpdate() {
    Storage.set(this.storageKey, JSON.stringify(this.state));
  }

  addToDo = text => {
    const todo = {
      uuid: uuid(),
      text: text,
      done: false
    };
    this.setState(state => {
      state.toDoItems[todo.uuid] = todo;
      return state;
    });
  };

  updateToDoText = (uuid, text) => {
    this.setState(state => {
      state.toDoItems[uuid].text = text;
      return state;
    });
  };

  toggleToDoDone = e => {
    const checkbox = e.target;
    this.setState(state => {
      state.toDoItems[checkbox.value].done = checkbox.checked;
      return state;
    });
  };

  removeToDo = uuid => {
    this.setState(state => {
      delete state.toDoItems[uuid];
      return state;
    });
  };

  setFilter = filter => {
    this.setState(state => {
      state.filter = filter;
      return state;
    });
  };
  */

  render() {
    return (
      <div className="container">
        <Header tagline="Here are all the next tasks." />
        <ToDoForm />
        <ToDoFilter />
        <ToDoList />
      </div>
    );
  }
}

export default App;
