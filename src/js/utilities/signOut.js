// Declare a function to signOut
import firebase from "firebase/app";

export const signOut = async () => {
	try {
		await firebase.auth().signOut();
		alert("Logout successful");
	} catch (e) {
		throw new Error("Error signing out");
	}
};
