import React from "react";
import { connect } from "react-redux";
import { filters, setFilter } from "../actions/index";
import PropTypes from "prop-types";

class ToDoFilter extends React.Component {
  filters = ["all", "undone", "done"];

  render() {
    return (
      <div className="todo-filters text-right">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Set a filter to show items"
        >
          {Object.keys(filters).map(filterKey => {
            const filter = filters[filterKey];

            return (
              <button
                type="button"
                className={`btn btn-light ${
                  this.props.filter === filter ? "active" : ""
                }`}
                onClick={e => {
                  this.props.setFilter(filter);
                }}
                key={filterKey}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

ToDoFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default connect(
  state => ({
    filter: state.filter
  }),
  {
    setFilter
  }
)(ToDoFilter);
