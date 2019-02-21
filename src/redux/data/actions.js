import { getPeopleApi } from "./operations";

export const UPDATE = "data/update";
export const SET = "data/set";

export function updateData(key, value) {
  return {
    type: UPDATE,
    payload: {
      key,
      value,
    },
  };
}

export function setData(key, value) {
  return {
    type: SET,
    payload: {
      key,
      value,
    },
  };
}

export function getPeople() {
  return dispatch => {
    getPeopleApi().then(({ results }) =>
      results.forEach(person =>
        dispatch(setData(`swapi:${person.name.replace(/\s+/g, "")}`, person))
      )
    );
  };
}

export const actions = {
  updateData,
  setData,
  getPeople,
};
