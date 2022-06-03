import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHadnler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 13 * 10000).toString(),
    };
    props.onAddExpense(expenseData);
  };

  const unfoldForm = () => {
    props.onAddNewExpense();
  };

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <div className="new-expense">
      {props.isUnfolded ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHadnler}
          onCancel={cancelHandler}
        />
      ) : (
        <button onClick={unfoldForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
