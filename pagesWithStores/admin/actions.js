import { store } from "../../store";

export function LOAD() {
  "load";
}

export function loadData(inputText) {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log("Got api response");
      store.dispatch({ type: LOAD, payload: inputText + "***" + data.title });
    });
}
