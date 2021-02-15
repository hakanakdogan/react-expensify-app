import React from "react";
import { shallow } from "enzyme";
import  ExpenseListItem  from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

const expense = expenses[0];


test("Should render ExpenseListItem with given expense", () => {
    const wrapper = shallow(<ExpenseListItem key={expense.id} {...expense} />);
    expect(wrapper).toMatchSnapshot();
});