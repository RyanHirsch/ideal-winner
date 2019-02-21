import * as actions from "./actions";

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case actions.UPDATE:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          ...action.payload.value,
        },
      };
    default:
      return state;
  }
}
