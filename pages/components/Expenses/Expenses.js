import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

function Expenses(props) {
  let expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      price={expense.price}
      edit={() => props.editHandler(expense.id)}
      delete={() => props.deleteHandler(expense.id)}
    />
  ));
  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
