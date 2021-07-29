//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

//firebase
var firebaseConfig = {
	apiKey: "AIzaSyDIQV8s86trzHADBLHRWLrP_Yqc5KrXl-4",
	authDomain: "authentication-exercise-6b47a.firebaseapp.com",
	projectId: "authentication-exercise-6b47a",
	storageBucket: "authentication-exercise-6b47a.appspot.com",
	messagingSenderId: "207069567467",
	appId: "1:207069567467:web:0e7a788e8a59054790a1ae",
	measurementId: "G-5TBVDLS227"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
