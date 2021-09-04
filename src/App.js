import expensesData from "../src/MockData/expenses-data";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.scss";

function App() {
  let expenses = expensesData;
  const newExpenseData = (newExpenseDataPassed) => {
    console.log(newExpenseDataPassed);
    return {
      ...newExpenseDataPassed,
    };
  };
  console.log(newExpenseData);
  return (
    <div className="container">
      <h1>This is a React Expenses App</h1>
      <NewExpense onSaveExpense={newExpenseData} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
