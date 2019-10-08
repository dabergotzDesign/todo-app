import React from "react";
import { connect } from "react-redux";
import { updateToDoText, toggleToDo, removeToDo } from "../actions/index";
import PropTypes from "prop-types";

class ToDoItem extends React.Component {
  handleKeyUp(e) {
    //removes focus when [ENTER] key is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }
  render() {
    const todo = this.props.data;

    return (
      <tr className="todo-item" data-id={todo.uuid}>
        <td>
          {/* CHECKBOX */}
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={e => {
                this.props.toggleToDo(todo.uuid);
              }}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        {/*TO DO  & UPDATE TEXT  */}
        <td>
          <input
            type="text"
            className="form-control"
            value={todo.text}
            onChange={e => {
              this.props.updateToDoText(todo.uuid, e.target.value);
            }}
            onKeyUp={e => {
              this.handleKeyUp(e);
            }}
          />
        </td>
        {/* DELETE TO DO */}
        <td className="col-action">
          <i
            className="icon-remove far fa-trash-alt"
            onClick={e => this.props.removeToDo(todo.uuid)}
          />
        </td>
      </tr>
    );
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired,
  toggleToDo: PropTypes.func.isRequired,
  updateToDoText: PropTypes.func.isRequired,
  removeToDo: PropTypes.func.isRequired
};

export default connect(
  state => ({}),
  {
    updateToDoText,
    toggleToDo,
    removeToDo
  }
)(ToDoItem);
