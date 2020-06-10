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
    fetch("https://localhost:5001/weatherforecast")
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
          payload: inputText + "***" + data.summary,
        });
      });
  });
}
