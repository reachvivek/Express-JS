import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} price={props.price} />
      <button className="edit-btn" onClick={props.edit}>
        <EditIcon className="icon" />
      </button>
      <button className="delete-btn" onClick={props.delete}>
        <DeleteIcon className="icon" />
      </button>
    </Card>
  );
}

export default ExpenseItem;
