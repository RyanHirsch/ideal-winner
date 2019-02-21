import { getPeopleApi } from "./operations";

export const UPDATE = "data/update";
export const SET = "data/set";

function injectKeyData(key, value) {
  const [type, id] = key.split(":");
  return {
    __key: key,
    __type: type,
    __id: id,
    ...value,
  };
}

export function updateData(key, value) {
  return {
    type: UPDATE,
    payload: {
      key,
      value: injectKeyData(key, value),
    },
  };
}

export function setData(key, value) {
  return {
    type: SET,
    payload: {
      key,
      value: injectKeyData(key, value),
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
