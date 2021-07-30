import React from "react";
// import { signOut } from "../component/signOut";
import { useHistory } from "react-router-dom";
import { siginOut } from "../utilities/signOut";

export const Dashboard = () => {
	const history = useHistory();
	return (
		<>
			<h1>LogedIn</h1>
			<button
				onClick={() => {
					siginOut();
					history.push("/");
				}}>
				LogOut
			</button>
		</>
	);
};
