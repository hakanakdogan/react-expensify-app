import authReducer from "../../reducers/auth";


test("should set login state", () => {
    const action = {
        type:"LOGIN",
        uid:1
    }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
    
})

test("should set logout state", () => {
  const action = {
      type:"LOGOUT"
  }
  const state = authReducer({uid:"sdg1512"}, action);
  expect(state).toEqual({});
})