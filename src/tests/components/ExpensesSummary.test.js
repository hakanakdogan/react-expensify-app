import React from "react";
import { shallow } from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";

test("Should render ExpensesSummary Correctly with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {10} />);
  expect(wrapper).toMatchSnapshot();
})

test("Should render ExpensesSummary Correctly with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {10} expensesTotal = {100} />);
    expect(wrapper).toMatchSnapshot();
  })