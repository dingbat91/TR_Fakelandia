import React from "react";
import { NavLink } from "react-router-dom";
import "../../normalize/normalize.css";
import "./Header.css";

export const Header: React.FC = () => {
	return (
		<div className='Header'>
			<p className='Header__Title'>Fakelandia Justice Department</p>
			<ul className='NavMenu'>
				<li>
					<NavLink className='NavMenu__link' to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink className='NavMenu__link' to='/misdemeanour'>
						Misdemanour
					</NavLink>
				</li>
				<li>
					<NavLink className='NavMenu__link' to='/confessions'>
						Confessions
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
