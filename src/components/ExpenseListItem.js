import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ history, description, amount, createdAt, id, dispatch }) => (

    <div>
        <Link to={`/editexpense/${id}`}>
            <h3>{description}</h3>
        </Link>

        <p>
            {numeral(amount/100).format("$0,0.00")}
                -
            {moment(createdAt).format("MMMM Do, YYYY")}

        </p>






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