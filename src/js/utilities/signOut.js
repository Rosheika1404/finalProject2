// Declare a function to signOut
import firebase from "firebase/app";

export const siginOut = async () => {
	try {
		await firebase.auth().signOut();
		console.log("logout");
	} catch (e) {
		throw new Error("error signing out");
	}
};
