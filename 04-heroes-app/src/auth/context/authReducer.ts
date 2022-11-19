import { types } from "../types/types";

interface InitialState {
  logged: boolean;
  user: { id: string; name: string } | null;
}

type TAction = { type: string; payload: { id: string; name: string } | null };

export const authReducer = (state: InitialState, action: TAction) => {
  switch (action?.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
        user: null,
      };

    default:
      return state;
  }
};
