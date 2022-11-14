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
    { id: 4, date: new Date(2020, 10, 20), title: "Rent", price: "600" },
    { id: 5, date: new Date(2020, 3, 13), title: "Car Loan", price: "1000" },
    { id: 6, date: new Date(2020, 0, 1), title: "Trip", price: "4000" },
  ];

  const [expenses, setExpenses] = useState(
    [...DUMMY_DATA].filter((expense) => expense.date.getFullYear() == 2020)
  );

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
