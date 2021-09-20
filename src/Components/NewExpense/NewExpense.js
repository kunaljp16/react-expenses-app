import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import CustomCard from "../UI/CustomCard";

const NewExpense = (props) => {
  const [isEditing, setIsEditEnable] = useState(false);
  const getNewExpensesFormDetails = (data) => {
    const expensesData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expensesData);
    setIsEditEnable(false);
  };
  const startEditingHandler = () => {
    setIsEditEnable(true);
  };

  const onCancelBtnClicked = () => {
    setIsEditEnable(false);
  };

  return (
    <CustomCard className="container pb-3 pt-3">
      {!isEditing && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={startEditingHandler}>
            Add New Expenses
          </button>
        </div>
      )}
      {isEditing && (
        <div className="new-expense">
          <ExpenseForm
            onExpensesSave={getNewExpensesFormDetails}
            onCancelBtnClicked={onCancelBtnClicked}
          />
        </div>
      )}
    </CustomCard>
  );
};

export default NewExpense;
