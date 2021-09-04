import React from "react";

import "./ExpensesFilter.scss";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="d-flex justify-content-between row">
        <label className="col-3">Filter by year</label>
        <div className="col-2">
          <select
            value={props.selected}
            onChange={dropdownChangeHandler}
            className="form-select"
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
