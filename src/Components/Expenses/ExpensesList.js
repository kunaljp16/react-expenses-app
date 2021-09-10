import React from "react";
import ExpenseItem from "./ExpensesItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="alert text-center alert-warning" role="alert">
        There is no item to display
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
