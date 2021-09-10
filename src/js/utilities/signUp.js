// Declare a function to signIn
import firebase from "firebase/app";

export const signUp = (displayName, email, password) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(currentUser => {
			return currentUser.user.updateProfile({
				displayName: displayName
			});
		});
};
