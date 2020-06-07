import { store } from "../../store";

export const LOAD = "load";

export function loadData(userId) {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log("Got api response");
      console.log(data);
      store.dispatch({ type: LOAD, payload: data.title });
      store.dispatch({ type: LOAD, payload: "clear this out" });
    });
}
