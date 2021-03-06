import React, { useState, useEffect } from "react";
// import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from "../index";
import SendMessage from "./SendMessage";
import signOut from "../utilities/signOut";

import { Link } from "react-router-dom";

function Chat() {
	// const scroll = useRef()
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		db.collection("messages")
			.orderBy("createdAt")
			.limit(50)
			.onSnapshot(snapshot => {
				setMessages(snapshot.docs.map(doc => doc.data()));
			});
	}, []);
	return (
		<div>
			<Link to="/login">
				<button
					className="btn btn-primary"
					onClick={() => {
						signOut();
					}}>
					Logout
				</button>
			</Link>

			<div className="msgs">
				{messages.map(({ id, text, photoURL, uid }) => (
					<div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
						<img src={photoURL} alt="" />
						<p>{text}</p>
					</div>
				))}
			</div>
			{/* <SendMessage scroll={scroll} /> */}
			<SendMessage />
			{/* <div ref={scroll}></div> */}
		</div>
	);
}

export default Chat;
