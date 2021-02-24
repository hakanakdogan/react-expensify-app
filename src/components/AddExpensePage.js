import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
export class AddExpensePage extends React.Component { //connectle bağlanmamı versiyonu test etmek için export ettik
    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        this.props.history.push("/") //dashboard sayfasına değişecek
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense </h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>

            </div>
        );
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense </h1>
//         <ExpenseForm
//             onSubmit={(expense) => {
//                 //props.dispatch(addExpense(expense));
//                 props.onSubmit(expense)
//                 props.history.push("/") //dashboard sayfasına değişecek
//             }}
//         />
//     </div>
// );

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => {
            return dispatch(startAddExpense(expense))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);