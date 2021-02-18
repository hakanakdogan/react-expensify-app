import selectExpensesTotal from "../../selectors/expenses-total";
import moment from "moment";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";


const total = selectExpensesTotal(expenses);

test("Should return 0 if no expenses", () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test("Should correctly add up single expense", () => {
    const total = selectExpensesTotal([expenses[2]]);
    expect(total).toBe(4500);
});

test("Should correctly add up multiple expenses", () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(114195);
})