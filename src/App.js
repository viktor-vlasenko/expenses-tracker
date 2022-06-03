import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Udemy React Course",
    amount: 12.99,
    date: new Date(2022, 5, 1),
  },
  {
    id: "e2",
    title: "Internet servises",
    amount: 8.5,
    date: new Date(2022, 5, 2),
  },
  {
    id: "e3",
    title: "Fueling car",
    amount: 41.09,
    date: new Date(2021, 11, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [formIsShown, setFormIsShown] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const addNewExpenseHadndler = () => {
    setFormIsShown(true);
  };

  const cancelHandler = () => {
    setFormIsShown(false);
  }

  return (
    <div className="App">
      <NewExpense
        isUnfolded={formIsShown}
        onAddNewExpense={addNewExpenseHadndler}
        onCancel={cancelHandler}
        onAddExpense={addExpenseHandler}
      />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
