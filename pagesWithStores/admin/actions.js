import { store } from "../../store";
import * as firebase from "firebase";

export function LOAD() {
  "load";
}

export function loadData(inputText) {
  let currentUser = firebase.auth().currentUser;
  if (currentUser === null) {
    window.location.href = "/login";
  }
  currentUser.getIdToken().then((token) => {
    console.log("token");
    console.log(token);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        console.log("Got api response");
        store.dispatch({
          type: LOAD,
          payload: inputText + "***" + data.title,
        });
      });
  });
}
