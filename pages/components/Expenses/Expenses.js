import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses() {
  const expenses = [
    { date: new Date(2022, 10, 10), title: "Petrol", price: "$100" },
    { date: new Date(2022, 1, 15), title: "Food", price: "$100" },
    { date: new Date(2023, 10, 8), title: "KFC", price: "$100" },
    { date: new Date(2022, 10, 1), title: "Rent", price: "$100" },
  ];
  let expenseItems = expenses.map((expense) => (
    <ExpenseItem
      date={expense.date}
      title={expense.title}
      price={expense.price}
    />
  ));
  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
