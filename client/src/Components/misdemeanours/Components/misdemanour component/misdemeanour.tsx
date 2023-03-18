import React from "react";
import { Misdemeanour } from "../../definitions/misdemeanour";

export const misdemeanour: React.FC<Misdemeanour> = (props) => {
	return (
		<li>
			<article>
				{props.citizenId}
				{props.date}
				{props.misdemeanour}
			</article>
		</li>
	);
};
