import React, { useEffect } from "react";
import startFirebaseUI from "../auth/firebase-auth-ui.js";

const AuthUI = () => {
  console.log("authui");
  useEffect(() => {
    console.log("got to use effect");
    startFirebaseUI("#firebaseui");
  }, []);

  return <div id="firebaseui" />;
};

export default AuthUI;
