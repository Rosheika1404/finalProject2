import React from "react";
import { signOut } from "../component/signOut";
import { useHistory } from "react-router-dom";

export const LogedIn = () => {
	const history = useHistory();
	return (
		<>
			<h1>LogedIn</h1>
			<button>
				LogOut
			</button>
		</>
	);
};