import "./ExpensesItem.scss";

function ExpenseItem(props) {
  return (
    <ul className="row expenses-item">
      <li className="expenses-item__list">
        <span className="col-md-3 expenses-item__date">{props.date.toISOString()}</span>
        <span className="col-md-7 expenses-item__description">
          {props.title}
        </span>
        <span className="col-md-2 expenses-item__price">${props.amount}</span>
      </li>
    </ul>
  );
}

export default ExpenseItem;
