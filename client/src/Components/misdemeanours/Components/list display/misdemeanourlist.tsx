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

	const RandomImage = () => {
		const width = Math.floor(Math.random() * (10 - 8 + 1) + 8) * 10;
		const height = Math.floor(Math.random() * (10 - 8 + 1) + 8) * 10;
		const url = `http://picsum.photos/${width}/${height}/`;
		return url;
	};
	return (
		<table className='MisdemeanourSection'>
			<tr>
				<th>ID</th>
				<th>misdemeanour</th>
				<th>Date</th>
				<th>Punishment</th>
			</tr>
			{!loading &&
				misdemeanours.map((md) => {
					return (
						<tr>
							<td>{md.citizenId.toString()}</td>
							<td>{md.misdemeanour}</td>
							<td>{md.date}</td>
							<td>
								<img src={RandomImage()} />
							</td>
						</tr>
					);
				})}
			{loading && <>Loading...</>}
		</table>
	);
};
