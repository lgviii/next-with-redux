// import Link from "next/link";
// import React, { useEffect } from "react";
// import dynamic from "next/dynamic";

// import startFirebaseUI from "../auth/firebase-auth-ui.js";
// import * as firebase from "firebase";

// const Security = () => {
//   useEffect(() => {
//     startFirebaseUI("#firebaseui");
//     firebase.auth().onAuthStateChanged(
//       function (user) {
//         if (user) {
//           // User is signed in.
//           document.getElementById("firebaseui").hidden = true;
//           var displayName = user.displayName;
//           var email = user.email;
//           var emailVerified = user.emailVerified;
//           var photoURL = user.photoURL;
//           var uid = user.uid;
//           var phoneNumber = user.phoneNumber;
//           var providerData = user.providerData;
//           // user.getIdToken().then(function (accessToken) {
//           // document.getElementById("sign-in-status").textContent = "Signed in";
//           // document.getElementById("sign-in").textContent = "Sign out";
//           //   document.getElementById(
//           //     "account-details"
//           //   ).textContent = JSON.stringify(
//           //     {
//           //       displayName: displayName,
//           //       email: email,
//           //       emailVerified: emailVerified,
//           //       phoneNumber: phoneNumber,
//           //       photoURL: photoURL,
//           //       uid: uid,
//           //       accessToken: accessToken,
//           //       providerData: providerData,
//           //     },
//           //     null,
//           //     "  "
//           //   );
//           // });
//         } else {
//           // User is signed out.
//           // document.getElementById("sign-out").hidden = true;
//           // document.getElementById("firebaseui").hidden = false;
//           // document.getElementById("sign-in-status").textContent = "Signed out";
//           // document.getElementById("sign-in").textContent = "Sign in";
//           // document.getElementById("account-details").textContent = "null";
//         }
//       },
//       function (error) {
//         console.log(error);
//       }
//     );
//   }, []);

//   return (
//     <div>
//       <div id="firebaseui"></div>
//       security stuff
//     </div>
//   );
// };

// export default Security;
