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

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    // fetch("https://lin-asp-backend.herokuapp.com/Counter", {
    fetch("https://localhost:5001/Counter", {
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    })
      .then((response) => {
        console.log("api response");
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("api response data");
        console.log(data);
        store.dispatch({
          type: LOAD,
          // payload: inputText + "***" + data.title,
          payload: "counter is now = " + data.counter,
        });
      });
  });
}
