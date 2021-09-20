import React, { useState } from "react";
import "./../Expenses/ExpensesItem.scss";
import ExpensesDate from "./../Expenses/ExpensesDate";
import CustomCard from "./../UI/CustomCard";

function ExpenseItem(props) {
  return (
    <li>
      <CustomCard className="row expenses-item bg-light">
        <div className="expenses-item__list">
          <ExpensesDate date={props.date} />
          <span className="col-md-7 expenses-item__title">{props.title}</span>
          <span className="col-md-2 expenses-item__price">${props.amount}</span>
        </div>
      </CustomCard>
    </li>
  );
}

export default ExpenseItem;
