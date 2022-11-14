import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import "../styles/globals.css";
import CreateExpenses from "./components/CreateExpenses/CreateExpenses";

function MyApp({ Component, pageProps }) {
  const DUMMY_DATA = [
    { id: 0, date: new Date(2022, 10, 10), title: "Petrol", price: "500" },
    { id: 1, date: new Date(2022, 1, 15), title: "Food", price: "300" },
    { id: 2, date: new Date(2021, 10, 8), title: "Trip", price: "200" },
    { id: 3, date: new Date(2022, 10, 1), title: "Rent", price: "600" },
  ];

  const [expenses, setExpenses] = useState([
    { id: 0, date: new Date(2022, 10, 10), title: "Petrol", price: "500" },
    { id: 1, date: new Date(2022, 1, 15), title: "Food", price: "300" },
    { id: 2, date: new Date(2021, 10, 8), title: "Trip", price: "200" },
    { id: 3, date: new Date(2022, 10, 1), title: "Rent", price: "600" },
  ]);

  function saveCreateExpenseHandler(createdExpenseData) {
    const newExpenses = [...expenses, createdExpenseData];
    setExpenses(newExpenses);
  }

  function deleteHandler(id) {
    const newExpenses = [...expenses].filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  }

  function editHandler(id) {
    const newExpenses = [...expenses];
    newExpenses.map((expense) => {
      if (expense.id == id) {
        expense.price = "100";
      }
    });
    setExpenses(newExpenses);
  }

  function filterExpenses(year) {
    const newExpenses = [...DUMMY_DATA].filter(
      (expense) => expense.date.getFullYear() == year
    );
    setExpenses(newExpenses);
  }

  return (
    <div>
      <CreateExpenses onCreateExpenseHandler={saveCreateExpenseHandler} />
      <Expenses
        expenses={expenses}
        editHandler={(id) => editHandler(id)}
        deleteHandler={(id) => deleteHandler(id)}
        filterExpenses={(year) => filterExpenses(year)}
      />
      ;
    </div>
  );
}

export default MyApp;
