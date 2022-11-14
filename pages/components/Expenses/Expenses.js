import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 0, date: new Date(2022, 10, 10), title: "Petrol", price: "$100" },
    { id: 1, date: new Date(2022, 1, 15), title: "Food", price: "$100" },
    { id: 2, date: new Date(2023, 10, 8), title: "KFC", price: "$100" },
    { id: 3, date: new Date(2022, 10, 1), title: "Rent", price: "$100" },
  ]);

  function deleteHandler(id) {
    const newExpenses = [...expenses].filter((expense) => expense.id !== id);
    console.log(newExpenses);
    setExpenses(newExpenses);
  }

  let expenseItems = expenses.map((expense) => (
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      price={expense.price}
      delete={() => deleteHandler(expense.id)}
    />
  ));
  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
