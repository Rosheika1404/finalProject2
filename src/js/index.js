//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

const firebaseConfig = {
	apiKey: "AIzaSyA2hNxpDy2uAXd_O4aru1XM2pxl486blIw",
	authDomain: "final-project-1961d.firebaseapp.com",
	projectId: "final-project-1961d",
	storageBucket: "final-project-1961d.appspot.com",
	messagingSenderId: "684528619805",
	appId: "1:684528619805:web:6b4a3d6166d44150c651f4",
	measurementId: "G-HKJSP7M1C0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
