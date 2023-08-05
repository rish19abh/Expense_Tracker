import React, { useState } from "react";
import "./NewForm.css";
const NewForm = (props) => {
  const [NewTitle, SetNewTitle] = useState();
  const [NewAmount, SetNewAmount] = useState();
  const [NewDate, SetNewDate] = useState();

  const titleChangeHandler = (event) => SetNewTitle(event.target.value);
  const amountChangeHandler = (event) => SetNewAmount(event.target.value);
  const dateChangeHandler = (event) => SetNewDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: NewTitle,
      amount: NewAmount,
      date: new Date(NewDate),
    };
    props.onSaveExpenseData(expenseData);
    SetNewTitle("");
    SetNewAmount("");
    SetNewDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <span>Title</span>
          <input type="text" value={NewTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <span>Amount</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={NewAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <span>Date</span>
          <input type="date" value={NewDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewForm;
