import Rebase from "re-base";
import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA5SHBTfZULMXgQKyI9jc8dYT_gHj1l89Q",
  authDomain: "inventory-store-app.firebaseapp.com",
  databaseURL: "https://inventory-store-app.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
