import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../Home/home";
import { Misdemeanours } from "../misdemeanours/misdemeanours";
import { Confessions } from "../Confessions/Confessions";
import { Layout } from "../Layout/Layout";

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='misdemeanour' element={<Misdemeanours />} />
				<Route path='confessions' element={<Confessions />} />
			</Route>
		</Routes>
	);
};
