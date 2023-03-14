import { GET_USER } from "./ActionType";

const initialState = {
  user: null,
};
export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
