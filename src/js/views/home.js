import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<span>
		<div className="sidenav">
			<div className="login-main-text">
				<h2>
					Application
					<br /> Login Page
				</h2>
				<p>Login or register from here to access.</p>
			</div>
		</div>
		<div className="main">
			<div className="col-md-6 col-sm-12">
				<div className="login-form">
					<form>
						<div className="form-group">
							<label>Email</label>
							<input type="text" className="form-control" placeholder="Email" />
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="password" className="form-control" placeholder="Password" />
						</div>
						<button type="submit" className="btn btn-black">
							Login
						</button>
						<button type="submit" className="btn btn-secondary">
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	</span>
);
