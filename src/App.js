import React, { useState } from "react";
import expensesData from "../src/MockData/expenses-data";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.scss";

function App() {
  // let expenses = expensesData;
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (expenses) => {
    setExpenses(prevData => {
      return [...prevData, expenses]
    });
  }
  

  return (
    <div className="container">
      <h1>This is a React Expenses App</h1>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
