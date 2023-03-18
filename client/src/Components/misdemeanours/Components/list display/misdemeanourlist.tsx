import React, { useEffect } from "react";
import { Misdemeanour } from "../../definitions/misdemeanour";
import { Misdemeanours } from "../../misdemeanours";
export const MisdemeanourList = () => {
	const [misdemeanours, setMisdemeanours] = React.useState<Misdemeanour[]>([]);
	const [loading, setLoading] = React.useState<Boolean>(true);

	useEffect(() => {
		setLoading(true);
		const FetchData = async () => {
			const response = await fetch(
				"http://localhost:8080/api/misdemeanours/3/"
			);
			const data = await response.json();
			setMisdemeanours(data.misdemeanours as Misdemeanour[]);
			setLoading(false);
		};
		FetchData();
	}, []);

	return (
		<table className='MisdemeanourSection'>
			<tr>
				<th>ID</th>
				<th>misdemeanour</th>
				<th>Date</th>
			</tr>
			{!loading &&
				misdemeanours.map((md) => {
					return (
						<tr>
							<td>{md.citizenId.toString()}</td>
							<td>{md.misdemeanour}</td>
							<td>{md.date}</td>
						</tr>
					);
				})}
			{loading && <>Loading...</>}
		</table>
	);
};
