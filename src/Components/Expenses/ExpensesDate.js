import "./../Expenses/ExpensesDate.scss";
import CustomCard from "./../UI/CustomCard";

function ExpensesDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <CustomCard className="d-flex expenses-date bg-secondary">
      <span>{month}</span>
      <span>{day}</span>
      <span>{year}</span>
    </CustomCard>
  );
}

export default ExpensesDate;
