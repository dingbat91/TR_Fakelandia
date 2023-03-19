import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../Home/home";
import { Misdemeanours } from "../misdemeanours/misdemeanours";
import { Confessions } from "../Confessions/Confessions";
import { Layout } from "../Layout/Layout";
import { Misdemeanour } from "../misdemeanours/definitions/misdemeanour";
import { useEffect, useState, createContext } from "react";
import { RandomImage } from "../script/RandomImage";
export interface MisdemeanourContext {
	items: Misdemeanour[];
	update: (c: Misdemeanour[]) => void;
	loading: boolean;
}

export const MDContext = createContext<MisdemeanourContext>({
	items: [],
	update: () => {},
	loading: true,
});

export const Router: React.FC = () => {
	const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	//API Fetch
	useEffect(() => {
		//set loading flag to true to display loading indicator
		setLoading(true);
		//Async function to fetch
		const FetchData = async () => {
			const response = await fetch(
				"http://localhost:8080/api/misdemeanours/3/"
			);
			const data = await response.json();
			//returns to returneddata for manipulation
			let returneddata = data.misdemeanours as Misdemeanour[];
			//adds image to return data
			returneddata.forEach((item) => {
				item.image = RandomImage();
			});
			//sorts the items by ID
			returneddata.sort((a, b) => a.citizenId - b.citizenId);
			//sets to state
			setMisdemeanours(returneddata);
			//Disables Loading indicator
			setLoading(false);
		};
		FetchData();
	}, []);

	//sets context;

	return (
		<MDContext.Provider
			value={{
				items: misdemeanours,
				update: setMisdemeanours,
				loading: loading,
			}}
		>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='misdemeanour' element={<Misdemeanours />} />
					<Route path='confessions' element={<Confessions />} />
				</Route>
			</Routes>
		</MDContext.Provider>
	);
};
