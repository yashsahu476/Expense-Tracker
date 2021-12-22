import react from "react";
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => 
{
    if(props.items.length === 0)
  {
     return <h2 className='expenses-list__fallback'> No expense found for this year </h2>
  }

  return (
       <ul className='expenses-list'>
          { props.items.map((expense) => ( 
      <ExpenseItem
         key = {expense.id}         // {/* for adding the new expense at the start of the list and not at the end */}
         title = {expense.title}
         amount = {expense.amount}
         date = {expense.date}
         />
    ))};
       </ul>
  )
}

export default ExpensesList;