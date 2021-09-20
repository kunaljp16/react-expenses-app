import React, { useState } from "react";
import ExpenseItem from "./../Expenses/ExpensesItem";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import CustomCard from "../UI/CustomCard";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <CustomCard className="container pb-3">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        {filteredExpenses.length === 0 ? (
          <div className="alert text-center alert-warning" role="alert">
          There is no item to display
        </div>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </CustomCard>
    </div>
  );
}

export default Expenses;
