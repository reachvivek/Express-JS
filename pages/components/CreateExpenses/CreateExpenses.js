import ExpenseForm from "./ExpenseForm";

function CreateExpenses(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onCreateExpenseHandler(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
    </div>
  );
}

export default CreateExpenses;
