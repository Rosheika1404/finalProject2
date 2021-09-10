import firebase from "firebase/app";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			isLoggedIn: []
		},
		actions: {
			actions: {
				// Use getActions to call a function within a fuction

				//Signup
				signUp: (displayName, email, password) => {
					const db = firebase.firestore();
					firebase
						.auth()
						.createUserWithEmailAndPassword(email, password)
						.then(currentUser => {
							return currentUser.user.updateProfile({
								displayName: displayName
							});
						});
				},
				// Login
				login: (email, password) => {
					return firebase.auth().signInWithEmailAndPassword(email, password);
				},
				loadLoggedInUser: () => {
					const actions = getActions();

					firebase.auth().onAuthStateChanged(function(user) {
						if (user !== null) {
							console.log("user", user);
							setStore({ isLoggedIn: true, user });
							// actions.loadAllGames();
						} else {
							setStore({ isLoggedIn: false, user: null });
						}
					});
				}
			}
		}
	};
};

export default getState;
