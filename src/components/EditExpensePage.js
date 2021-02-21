import React from "react"
import { connect } from "react-redux";
import { editExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  }


  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove} >Remove</button>
      </div>
    );
  }
}

// const EditExpensePage = (props) => {

//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push("/");
//         }}
//       />
//       <button onClick={() => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push("/");
//       }} >Remove</button>
//     </div>
//   );
// }

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id,expense) => {
      return dispatch(editExpense(id,expense));
    },
    startRemoveExpense: (data) => {
      return dispatch(startRemoveExpense(data))
    }
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);