import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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
      title: "Donation to Slava's jar",
      amount: 101.59,
      date: new Date(2022, 5, 1),
    },
    {
      id: "e4",
      title: "Extension cord",
      amount: 16.9,
      date: new Date(2022, 4, 29),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
