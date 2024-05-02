import React, { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleFilterChange = e => {
    this.props.setFilter(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <div className={css.divFilter}>
        <p>Find Contacts by Name</p>
        <input className={css.filterInput}
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
