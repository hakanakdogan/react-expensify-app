import moment from "moment";
import { setStartDate, setEndDate, editTextFilter, sortByDate, sortByAmount } from "../../actions/filters";

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});

test("should generate edit text action object", () => {
    const action = editTextFilter("test text");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "test text"
    })
})

test("should generate edit text action object with default values", () => {
    const action = editTextFilter("");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})

test("should generate sort by date action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"

    })
})

test("should generate sort by amount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"

    })
})