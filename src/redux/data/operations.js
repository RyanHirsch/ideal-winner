import { mergeMap } from "rxjs/operators";
import rxFetchable from "rx-fetchable";

export function getPeopleApi() {
  return rxFetchable("https://swapi.co/api/people")
    .pipe(mergeMap(resp => resp.json()))
    .toPromise();
}
