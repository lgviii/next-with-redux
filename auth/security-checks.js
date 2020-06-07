import * as firebase from "firebase";

export const isLoggedOn = function (setIsUserLoggedIn, setUserData = null) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("User is logged in!");
      setIsUserLoggedIn(true);
      if (setUserData != null)
        user.getIdToken().then(function (accessToken) {
          setUserData({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            uid: user.uid,
            accessToken: accessToken,
            providerData: user.providerData,
          });
        });
    } else {
      console.log("User is not logged in!");
      setIsUserLoggedIn(false);
    }
  });
};

export const logOut = function () {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("User has logged out.");
    })
    .catch(function (error) {
      console.log("Error logging out: " + error);
    });
};
