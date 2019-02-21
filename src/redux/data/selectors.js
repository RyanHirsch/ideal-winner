import { pathOr } from "ramda";

export function getArbitrary(state, id) {
  return pathOr("Nope", ["data", `arbitrary:${id}`], state);
}

export function getByType(state, type) {
  return Object.values(state.data).filter(item => item.__type === type);
}
