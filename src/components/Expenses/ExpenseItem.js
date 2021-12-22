import React, {  } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) 
{
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     console.log(title); 
    //     setTitle('Updated');
    // }

    return(
        <li>
    <Card className="expense-item"> 
       <ExpenseDate date={props.date} />
        <div className="expense-item_description">
            <h2> {props.title} </h2>
        </div>
        <div className="expense-item_price">
            ${props.amount}
        </div>
        {/* <button onClick= {clickHandler}>Change Title</button> */}
    </Card>
       </li>
    );
}

export default ExpenseItem;