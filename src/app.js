import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.scss"
import "normalize.css/normalize.css";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startAddExpense, startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpense from "./selectors/expenses";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";


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
    <AppRouter />

  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
})

