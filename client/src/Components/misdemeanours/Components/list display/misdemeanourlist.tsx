import e from "cors";
import React, { useContext, useEffect } from "react";
import { MDContext } from "../../../Router/router";
import "./misdemeanourlist.css";

//Misdemeanour Type Definition
export const MISDEMEANOURS = [
	"rudeness",
	"vegetables",
	"lift",
	"united",
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const MisdemeanourList = () => {
	const [filter, setFilter] = React.useState<MisdemeanourKind | "all">("all");

	const MD = useContext(MDContext);
	const misdemeanours = MD.items;
	let loading = MD.loading;

	return (
		<div className='Misdemeanour__List'>
			<select
				className='Misdemeanour__Filter'
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

			<table className='Misdemeanour__Table'>
				<tr className='Misdemeanour__Table__Keys'>
					<th>ID</th>
					<th>Misdemeanour</th>
					<th>Date</th>
					<th>Punishment</th>
				</tr>
				{!loading &&
					misdemeanours.map((md) => {
						if (filter === "all" || md.misdemeanour === filter) {
							return (
								<tr className='Misdemeanour__Table__Row'>
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
		</div>
	);
};
