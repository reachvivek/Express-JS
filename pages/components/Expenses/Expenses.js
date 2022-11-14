import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
    props.filterExpenses(selectedYear);
  };

  let expenseItems = <p>No Expense Found!</p>;

  if (props.expenses.length > 0) {
    expenseItems = props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        price={expense.price}
        edit={() => props.editHandler(expense.id)}
        delete={() => props.deleteHandler(expense.id)}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseItems}
    </Card>
  );
}

export default Expenses;
