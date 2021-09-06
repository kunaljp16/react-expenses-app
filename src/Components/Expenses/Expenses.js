import React, { useState } from "react";
import ExpenseItem from "./../Expenses/ExpensesItem";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import CustomCard from "../UI/CustomCard";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    
    <div>
      <CustomCard className="container">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.item.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </CustomCard>
    </div>
  );
}

export default Expenses;
