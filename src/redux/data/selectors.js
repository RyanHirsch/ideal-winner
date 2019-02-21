import { pathOr } from "ramda";

export function getArbitrary(state, id) {
  return pathOr("Nope", ["data", `arbitrary:${id}`], state);
}
