import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div className='expense-item__date'>June 1st, 2022</div>
      <div className='expense-item__description'>
        <h2>Udemy React Course</h2>
        <div className='expense-item__price'>$12.99</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
