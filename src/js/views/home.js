import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import chat from "../utilities/chat";
import { signIn } from "../utilities/signIn";

export const Home = () => {
	return (
		<>
			<div>
				<h1 className="display-4 justify-content-center text-center">Lets Chat!</h1>

				<chat />
			</div>
		</>
	);
};
