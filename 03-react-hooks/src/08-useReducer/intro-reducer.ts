interface InitialState {
  id: number;
  todo: string;
  done: boolean;
}
type TActionProps = { type: string; payload: InitialState };
type TodoReducer = (state: InitialState[], actions: TActionProps) => InitialState[];

const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

const todoReducer: TodoReducer = (state = initialState, action) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

// let todos = todoReducer(initialState, {});

const newTodo = {
  id: 2,
  todo: "Recolectar la priedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

const todos = todoReducer(initialState, addTodoAction);

console.log({ state: todos });
