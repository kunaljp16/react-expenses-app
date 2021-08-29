import expensesData from "../src/MockData/expenses-data";
import Expenses from "./Components/Expenses/Expenses";

import "./App.scss";

function App() {
  let expenses = expensesData;
  return (
    <div className="container">
      <h1>This is a React Expenses App</h1>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
