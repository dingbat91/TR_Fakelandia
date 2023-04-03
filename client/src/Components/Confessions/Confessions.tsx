import React, { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { MisdemeanourKind } from "../misdemeanours/Components/list display/misdemeanourlist";
import { MDContext } from "../Router/router";
import { Misdemeanour } from "../misdemeanours/definitions/misdemeanour";
import { v4 as uuidv4 } from "uuid";
import { RandomImage } from "../script/RandomImage";
import "./Confessions.css";

enum ReasonEnum {
	Rudeness = "Rudeness",
	Vegetables = "Vegetables",
	Lift = "Lift",
	United = "United",
	JustTalk = "Just-Talk",
}

interface Inputs {
	ConfessionSubject: string;
	ConfessionReason: ReasonEnum;
	ConfessionInfo: string;
}

export const Confessions: React.FC = () => {
	const [responseMessage, setResponseMessage] = useState<string>("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const MD = useContext(MDContext);
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const subject = data.ConfessionSubject;
		let reason: MisdemeanourKind | "just-talk";
		const details = data.ConfessionInfo;
		switch (data.ConfessionReason) {
			case "Rudeness": {
				reason = "rudeness";
				break;
			}
			case "Vegetables": {
				reason = "vegetables";
				break;
			}
			case "Lift": {
				reason = "lift";
				break;
			}
			case "United": {
				reason = "united";
				break;
			}
			default: {
				reason = "just-talk";
				break;
			}
		}

		const postObject = {
			subject: subject,
			reason: reason,
			details: details,
		};

		const jsonObject = JSON.stringify(postObject);

		await fetch("http://localhost:8080/api/confess", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: jsonObject,
		})
			.then(async (response) => {
				const data = await response.json();
				if (data.success === true && data.justTalked === false) {
					const date = new Date();
					const currentMoment = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
					const newData: Misdemeanour = {
						citizenId: Math.floor(Date.now() + Math.random()),
						misdemeanour: postObject.reason,
						date: currentMoment,
						image: RandomImage(),
					};
					const newlist = [...MD.items, newData];
					MD.update(newlist);
				}
				setResponseMessage(data.message);
			})
			.catch((e: Error) => {
				console.log(e.message);
			});
	};

	return (
		<main className='Form__Container'>
			<form className='Form' onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register("ConfessionSubject", {
						required: "Please Input a message here",
					})}
				/>
				<ErrorMessage
					errors={errors}
					name='ConfessionSubject'
					render={({ message }) => <>{message}</>}
				/>
				<select {...register("ConfessionReason")}>
					<option value='Rudeness'>Rudeness</option>
					<option value='Vegetables'>Vegetables</option>
					<option value='Lift'>Lift</option>
					<option value='United'>United</option>
					<option value='Just-Talk'>I just want to talk</option>
				</select>
				<textarea
					{...register("ConfessionInfo", {
						required: true,
						minLength: 5,
						maxLength: 2000,
					})}
				/>
				<input type='submit' />
			</form>
			{responseMessage && <p>{responseMessage}</p>}
		</main>
	);
};
