import { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const filterHandler = (event) => {
    setFilterYear(event.target.value);
    console.log("Filter by " + event.target.value);

    props.onFilterByYear(filterYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterHandler}>
          <option value="none">––––</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
