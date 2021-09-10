import firebase from "firebase/app";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			games: [],
			isLoggedIn: false,
			deckId: [],
			drawCard: [],
			deck: [],
			playerOneDeck: [],
			playerTwoDeck: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			//Signup
			signUp: (displayName, email, password) => {
				const db = firebase.firestore();
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(result => {
						return result.user.updateProfile({
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
					if (user) {
						console.log("user", user);
						setStore({ isLoggedIn: true, user });
						actions.loadAllGames();
					} else {
						setStore({ isLoggedIn: false, user: null });
					}
				});
			}
			// shuffleDeck: deck => {
			// 	for (let i = 0; i < 52; i++) {
			// 		let tempCard = deck[i];
			// 		let randomIndex = Math.floor(Math.random() * 52);
			// 		deck[i] = deck[randomIndex];
			// 		deck[randomIndex] = tempCard;
			// 	}
			// 	return deck;
			// },
			// newGame: () => {
			// 	const actions = getActions();
			// 	//s=suits v=value
			// 	let suits = ["♥", "♦", "♠", "♣"];
			// 	let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
			// 	let deck = [];
			// 	for (let suitCounter = 0; suitCounter < suits.length; suitCounter++) {
			// 		for (let ranksCounter = 0; ranksCounter < ranks.length; ranksCounter++) {
			// 			//           console.log(suits[suitCounter] + ranks[ranksCounter])
			// 			// (suit === "♥" || suit === "♦" ? style={{color:"red"}} : "")
			// 			let card = { suit: suits[suitCounter], value: ranks[ranksCounter], flipped: true };

			// 			deck.push(card);
			// 		}
			// 	}

			// 	let shuffledDeck = actions.shuffleDeck(deck);
			// 	setStore({
			// 		playerOneDeck: shuffledDeck.splice(0, 7), //take first 4
			// 		playerTwoDeck: shuffledDeck.splice(0, 7), //now we take another other 4
			// 		deck: shuffledDeck
			// 	});
			// },

			// loadAllGames: () => {
			// 	let games = [];
			// 	const firestore = firebase.firestore();
			// 	console.log("firestore", firestore.collection);
			// 	let query = firestore.collection("games");

			// 	query.get().then(querySnapshot => {
			// 		querySnapshot.forEach(doc => {
			// 			games.push({ id: doc.id, cursor: doc, ...doc.data() });
			// 		});
			// 		console.log("This are all the games", games);
			// 		setStore({ games });
			// 	});
			// },

			// getMyGames() {
			// 	const store = getStore();
			// 	const myGames = store.games.filter(
			// 		game => game.player1 === store.user.uid || game.player2 === store.user.uid
			// 	);
			// 	return myGames;
			// }
		}
	};
};
export default getState;
