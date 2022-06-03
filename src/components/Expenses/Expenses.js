import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const filterByYearHandler = (yearToFilterBy) => {
    console.log('In Expenses now filtering by ' + yearToFilterBy)
  }

  return (
    <div>
      <ExpensesFilter onFilterByYear={filterByYearHandler} />
      <Card className="expenses">
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
