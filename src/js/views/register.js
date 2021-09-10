import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { signUp } from "../utilities/signUp";
import { Context } from "../store/appContext";

import "../../styles/login.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const onSignUpClicked = async (email, password) => {
		try {
			await actions.signUp(displayName, email, password, store.userId);
			history.push("/");
			console.log("account created");
		} catch (e) {
			alert(e.message);
		}
	};

	return (
		<span className="card">
			<div
				className="main box"
				style={{
					position: "absolute",
					left: "50%",
					top: "50%"
					// transform: "translate(-50%, -50%)"
				}}>
				<div className="login-main-text">
					<p>Register to play.</p>
				</div>
				<div className="col-md-6 col-sm-12">
					<div className="login-form">
						<form>
							<div className="form-group">
								{/* <label>Name</label> */}
								<input
									type="text"
									className="form-control"
									placeholder="Name"
									onChange={e => setDisplayName(e.target.value)}
								/>
							</div>
							<div className="form-group">
								{/* <label>Email</label> */}
								<input
									type="text"
									className="form-control"
									placeholder="Email"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-group">
								{/* <label>Password</label> */}
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="form-group">
								{/* <label>Password</label> */}
								<input
									type="password"
									className="form-control"
									placeholder="Confirm Password"
									onChange={e => setConfirmPassword(e.target.value)}
								/>
							</div>

							<Link to="/login">
								<p className="forgot text-muted">Already have an account? Log In</p>
							</Link>
							<br />
							<br />

							<input
								type="submit"
								className="btn btn-black"
								value="Register"
								onClick={e => {
									if (password !== confirmPassword) {
										e.preventDefault();
										alert("Passwords do not match");
									} else {
										onSignUpClicked(email, password);
										e.preventDefault();
									}
								}}
							/>
						</form>
					</div>
				</div>
			</div>
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</span>
	);
};
