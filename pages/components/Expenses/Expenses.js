import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 0, date: new Date(2022, 10, 10), title: "Petrol", price: "$500" },
    { id: 1, date: new Date(2022, 1, 15), title: "Food", price: "$300" },
    { id: 2, date: new Date(2021, 10, 8), title: "Trip", price: "$200" },
    { id: 3, date: new Date(2022, 10, 1), title: "Rent", price: "$600" },
  ]);

  function deleteHandler(id) {
    const newExpenses = [...expenses].filter((expense) => expense.id !== id);
    console.log(newExpenses);
    setExpenses(newExpenses);
  }

  function editHandler(id) {
    const newExpenses = [...expenses];
    newExpenses.map((expense) => {
      if (expense.id == id) {
        expense.price = "$100";
      }
    });
    console.log(newExpenses);
    setExpenses(newExpenses);
  }

  let expenseItems = expenses.map((expense) => (
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      price={expense.price}
      edit={() => editHandler(expense.id)}
      delete={() => deleteHandler(expense.id)}
    />
  ));
  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
