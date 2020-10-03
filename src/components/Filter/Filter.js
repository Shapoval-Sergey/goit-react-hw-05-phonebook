import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label className={s.label}>
        Find contacts by name:
        <input
          className={s.filter}
          placeholder="Enter name"
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
