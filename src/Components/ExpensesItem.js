import "./ExpensesItem.scss";
import ExpensesDate from "./ExpensesDate";

function ExpenseItem(props) {
  return (
    <ul className="row expenses-item">
      <li className="expenses-item__list">
        <ExpensesDate date={props.date}></ExpensesDate>
        <span className="col-md-7 expenses-item__title">{props.title}</span>
        <span className="col-md-2 expenses-item__price">${props.amount}</span>
      </li>
    </ul>
  );
}

export default ExpenseItem;
