import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { signOut } from "../utilities/signOut";

export const Navbar = () => {
	const { store } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Go Fish</span>
			</Link>
			<div className="ml-auto">
				{!store.isLoggedIn ? (
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
				) : (
					<>
						<Link to="/register">
							<button className="btn btn-primary">Profile</button>
						</Link>
						&nbsp;
						<Link to="/login">
							<button
								className="btn btn-primary"
								onClick={() => {
									signOut();
								}}>
								Logout
							</button>
						</Link>
					</>
				)}
				{/* &nbsp;
				<Link to="/register">
					<button className="btn btn-primary">Register</button>
				</Link> */}
			</div>
		</nav>
	);
};
