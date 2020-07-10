import { store } from "../../store";
import * as firebase from "firebase";
import { apiConfig } from "../../api/config";

export function START_LOADING() {
  "start loading";
}

export function STOP_LOADING() {
  "stop loading";
}

export function COUNTER_INCREMENT() {
  "increment";
}

export function COUNTER_DECREMENT() {
  "decrement";
}

export function COUNTER_LOAD() {
  "decrement";
}

export function setPageToLoading() {
  store.dispatch({
    type: START_LOADING,
  });
}

export function setPageToNotLoading() {
  store.dispatch({
    type: STOP_LOADING,
  });
}

export function loadData() {
  store.dispatch({
    type: START_LOADING,
  });

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

        store.dispatch({
          type: STOP_LOADING,
        });
      });
  });
}

export function incrementCounter() {
  store.dispatch({
    type: START_LOADING,
  });

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

      store.dispatch({
        type: STOP_LOADING,
      });
    });
  });
}
