import moment from "moment";
import filtersReducer from "../../reducers/filters";
import expenses from "../../selectors/expenses";

test("should set up default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")


    })
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
}) //burada current state tanımlamadık çünkü zaten default sort date di.

test("should set sortBy to date", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    }
    const action = { type: "SORT_BY_DATE" }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("date");
})

test("should set text filter", () => {
    const action = { type: "SET_TEXT_FILTER", text: "bill" }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe("bill")
});

test("should set startDate filter", () => {
    const action = { type: "SET_START_DATE", startDate:moment() }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment());
})

test("should set endDate filter", () => {
    const action = { type: "SET_END_DATE", endDate: moment() }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment());
})