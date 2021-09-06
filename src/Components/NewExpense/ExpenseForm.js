import React, { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };
  const dateChangeHandler = (event) => {

    const newDate = (event.target.value).split('-');
    
    const yyyy = parseInt(newDate[0]);
    const mm = parseInt(newDate[1]);
    const dd = parseInt(newDate[2]); 
    const updatedDate = new Date(yyyy, mm, dd);

    setEnteredDate(updatedDate);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: date,
    };
    console.log("expenseData =" + expenseData);
    props.onExpensesSave(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    
  };

  return (
    <form onSubmit={submitHandler} className="form-control mb-4">
      <div className="form-wrapper mb-3">
        <div className="">
          <label>Title</label>
          <input
            value={title}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
          />
        </div>
        <div className="">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
          />
        </div>
      </div>
      <div className="text-end">
        <button className="btn btn-primary" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
