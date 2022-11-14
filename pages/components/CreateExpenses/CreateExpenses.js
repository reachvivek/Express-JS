import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function CreateExpenses(props) {
  const [editing, setEditing] = useState(false);

  function editingHandler() {
    setEditing(editing ? false : true);
    console.log(editing);
  }
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onCreateExpenseHandler(expenseData);
  }
  return (
    <div className="new-expense">
      {!editing && <button onClick={editingHandler}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          editingHandler={editingHandler}
        />
      )}
    </div>
  );
}

export default CreateExpenses;
