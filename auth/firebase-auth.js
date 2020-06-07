import * as firebase from "firebase";
import { authConfig } from "../secrets/auth-config";

if (!firebase.apps.length) {
  firebase.initializeApp(authConfig);
}
