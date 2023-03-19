import e from "cors";
import React, { useEffect } from "react";
import { Misdemeanour } from "../../definitions/misdemeanour";

//Misdemeanour Type Definition
export const MISDEMEANOURS = [
	"rudeness",
	"vegetables",
	"lift",
	"united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const MisdemeanourList = () => {
	const [misdemeanours, setMisdemeanours] = React.useState<Misdemeanour[]>([]);
	const [loading, setLoading] = React.useState<Boolean>(true);
	const [filter, setFilter] = React.useState<MisdemeanourKind | "all">("all");

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

	// Creates random image via randomiseation of width and height parameters
	const RandomImage = () => {
		const width = Math.floor(Math.random() * (10 - 8 + 1) + 8) * 10;
		const height = Math.floor(Math.random() * (10 - 8 + 1) + 8) * 10;
		const url = `http://picsum.photos/${width}/${height}/`;
		return url;
	};
	return (
		<table className='MisdemeanourSection'>
			<select
				// On change sets filter state to rerender to selected filter
				onChange={(e) => {
					const data = e.target.value as MisdemeanourKind | "all";
					setFilter(data);
				}}
			>
				<option value='all'>All</option>
				<option value='rudeness'>Rudeness</option>
				<option value='lift'>Lift</option>
				<option value='united'>United</option>
				<option value='vegetables'>Vegetables</option>
			</select>
			<tr>
				<th>ID</th>
				<th>misdemeanour</th>
				<th>Date</th>
				<th>Punishment</th>
			</tr>
			{!loading &&
				misdemeanours.map((md) => {
					if (filter === "all" || md.misdemeanour === filter) {
						return (
							<tr>
								<td>{md.citizenId.toString()}</td>
								<td>{md.misdemeanour}</td>
								<td>{md.date}</td>
								<td>
									<img src={md.image} />
								</td>
							</tr>
						);
					}
				})}
			{loading && <>Loading...</>}
		</table>
	);
};
