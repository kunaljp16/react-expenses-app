import React from "react";
import expensesData from '../src/MockData/expenses-data'
import ExpenseItem from "./Components/ExpensesItem";
import "./App.scss";
class App extends React.Component {
  render() {
    let expenses = expensesData;
    return (
      <div className="container">
        <h1>This is a React Expenses App</h1>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      </div>
    );
  }
}

export default App;
