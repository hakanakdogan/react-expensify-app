import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./styles/styles.scss"
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {editTextFilter, sortByAmount, sortByDate} from "./actions/filters";
import getVisibleExpense from "./selectors/expenses";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";


const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpense = getVisibleExpense(state.expenses, state.filters);
//     console.log(visibleExpense);
//   })
// //store.subscribe dispatchlerden önce gelmelidir
// store.dispatch(addExpense({description:"Water Bill", amount:4500}));
// store.dispatch(addExpense({description:"Gas Bill", createdAt:1000}));
// store.dispatch(addExpense({description:"Rent", amount:109500}));

const jsx = (

  <Provider store={store} >
    <AppRouter/>

  </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));

