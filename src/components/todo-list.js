import React from "react";
import ToDoItem from "./todo-item";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ToDoList extends React.Component {
  filteredItems = () => {
    const filtered = [];

    for (const uuid in this.props.items) {
      const item = this.props.items[uuid];

      if (
        this.props.filter === "all" ||
        (this.props.filter === "done" && item.done === true) ||
        (this.props.filter === "undone" && item.done === false)
      ) {
        filtered.push(item);
      }
    }
    return filtered;
  };

  render() {
    return (
      <div className="todo-list">
        <table className="todo-items  table table-borderless">
          <tbody>
            {this.filteredItems().map(item => (
              <ToDoItem
                key={`todo-item-${item.uuid}`}
                data={item}
                updateToDoText={this.props.updateToDoText}
                toggleToDoDone={this.props.toggleToDoDone}
                removeToDo={this.props.removeToDo}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ToDoList.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      done: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      uuid: PropTypes.string.isRequired
    })
  ),
  filter: PropTypes.string.isRequired
};

export default connect(state => ({
  items: state.toDoItems,
  filter: state.filter
}))(ToDoList);
