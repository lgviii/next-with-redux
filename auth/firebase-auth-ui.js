import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "/terms",
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());

const startFirebaseUI = function (elementId) {
  ui.start(elementId, uiConfig);
};

export default startFirebaseUI;
