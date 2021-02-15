import React from "react";
import { Link } from "react-router-dom";


 const ExpenseListItem = ({ history, description, amount, createdAt, id, dispatch }) => (

    <div>
        <Link to={`/editexpense/${id}`}>
            <h3>{description}</h3>
        </Link>

        <ul>

            <li>Amount: {amount}</li>
            <li>Created At: {createdAt}</li>

        </ul>
        

        {
            // <Link to={`/editexpense/${id}`}>
            //     <button>
            //         Edit
            //     </button>
            // </Link>

            //Butonu sayfa değiştirmek için böyle kullanabiliyorum
        }


        <hr />
    </div>

);


export default ExpenseListItem;