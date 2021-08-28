import './ExpensesDate.scss';

function ExpensesDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <section className="d-flex expenses-date">
      <span>{month}</span>
      <span>{day}</span>
      <span>{year}</span>
    </section>
  );
}

export default ExpensesDate;
