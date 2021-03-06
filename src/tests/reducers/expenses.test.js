import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" })
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should nor remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test("should add an expense", () => {
    const expense = {
        id: "3",
        description: "",
        note: "",
        amount: 1,
        createdAt: 10
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);

});

test("should edit an expense", () => {
    const updates = {
        note: "test"
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: "2",
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toEqual("test");
});

test("should not edit an expense if id not found", () => {
    const updates = {
        note: "test"
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
      type:"SET_EXPENSES",
      expenses:[expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});