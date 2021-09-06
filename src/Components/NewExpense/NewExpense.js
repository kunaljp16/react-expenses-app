import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const getNewExpensesFormDetails = (data)=>{
   const expensesData={
      ...data,
    id: Math.random().toString()
  }
  props.onAddExpenses(expensesData);
}
  return (
    <div className="new-expense">
      <ExpenseForm  onExpensesSave={getNewExpensesFormDetails} />
    </div>
  );
};

export default NewExpense;
