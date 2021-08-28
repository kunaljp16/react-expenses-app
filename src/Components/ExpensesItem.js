import "./ExpensesItem.scss";
import ExpensesDate from "./ExpensesDate";
import CustomCard from "./CustomCard";

function ExpenseItem(props) {
  return (
    <CustomCard className="row expenses-item">
      <div className="expenses-item__list">
        <ExpensesDate date={props.date}></ExpensesDate>
        <span className="col-md-7 expenses-item__title">{props.title}</span>
        <span className="col-md-2 expenses-item__price">${props.amount}</span>
      </div>
    </CustomCard>
  );
}

export default ExpenseItem;
