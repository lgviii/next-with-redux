import { store } from "../../store";
import * as firebase from "firebase";
import { apiConfig } from "../../api/config";
import { createIncrementalCompilerHost } from "typescript";

export function COUNTER_INCREMENT() {
  "increment";
}

export function COUNTER_DECREMENT() {
  "decrement";
}

export function COUNTER_LOAD() {
  "decrement";
}

export function loadData() {
  let currentUser = firebase.auth().currentUser;

  if (currentUser === null) {
    window.location.href = "/login";
  }

  currentUser.getIdToken().then((token) => {
    console.log("token");
    console.log(token);

    fetch(`${apiConfig.baseServerUrl}/Counter`, {
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
          type: COUNTER_LOAD,
          payload: data.counter,
        });
      });
  });
}

export function incrementCounter() {
  let currentUser = firebase.auth().currentUser;

  if (currentUser === null) {
    window.location.href = "/login";
  }

  currentUser.getIdToken().then((token) => {
    console.log("token");
    console.log(token);

    fetch(`${apiConfig.baseServerUrl}/IncrementCounter `, {
      method: "PATCH",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    }).then((data) => {
      store.dispatch({
        type: COUNTER_INCREMENT,
      });
    });
  });
}
