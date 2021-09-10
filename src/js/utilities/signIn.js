import React from "react";
import firebase from "firebase/app";

export const signIn = (email, password) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
};
