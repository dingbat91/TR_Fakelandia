import React from "react";
import { NavLink } from "react-router-dom";
import "../../normalize/normalize.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className='Header'>
			<h1 className='Header__Title'>Fakelandia Justice Department</h1>
			<nav className='NavMenu'>
				<button
					className='NavMenu__Button'
					onClick={() => {
						navigate("/");
					}}
				>
					Home
				</button>
				<button
					className='NavMenu__Button'
					onClick={() => {
						navigate("/misdemeanour");
					}}
				>
					Misdemanour
				</button>
				<button
					className='NavMenu__Button'
					onClick={() => {
						navigate("confessions");
					}}
				>
					Confessions
				</button>
			</nav>
		</div>
	);
};
