import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formIsShown, setFormIsShown] = useState(false);

  const saveExpenseDataHadnler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 13 * 10000).toString(),
    };
    props.onAddExpense(expenseData);
    setFormIsShown(false);
  };

  const addNewExpenseHadndler = () => {
    setFormIsShown(true);
  };

  const cancelHandler = () => {
    setFormIsShown(false);
  };

  return (
    <div className="new-expense">
      {formIsShown ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHadnler}
          onCancel={cancelHandler}
        />
      ) : (
        <button onClick={addNewExpenseHadndler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
