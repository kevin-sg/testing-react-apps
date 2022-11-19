import { todoReducer } from "@/08-useReducer";

describe("Test in todoReducer", () => {
  const initialState = [
    {
      id: 1,
      todo: "Test 1",
      done: false,
    },
  ];

  test("should return the initial state", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("should add new todo", () => {
    const actions = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        todo: "New Todo #2",
        done: false,
      },
    };
    const newState = todoReducer(initialState, actions);

    expect(newState.length).toBe(2);
    expect(newState).toContain(actions.payload);
  });

  test("should remove todo", () => {
    const action = { type: "[TODO] Remove Todo", payload: 1 };
    const newState = todoReducer(initialState, action);

    expect(newState.length);
  });

  test("should make the toggle todo", () => {
    const action = { type: "[TODO] Toggle Todo", payload: 1 };
    const newState = todoReducer(initialState, action);

    const currentItem = newState.filter((el) => el.id === action.payload);
    expect(newState.length).toBe(1);
    expect(currentItem).toBeTruthy();
  });
});
