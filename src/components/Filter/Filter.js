import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
