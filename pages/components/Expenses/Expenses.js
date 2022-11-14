import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    props.filterExpenses(selectedYear);
  };

  let expenseItems = (
    <h2 className="expenses-list__fallback">No Expense Found!</h2>
  );

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
      <ExpensesChart expenses={props.expenses} />
      {expenseItems}
    </Card>
  );
}

export default Expenses;
