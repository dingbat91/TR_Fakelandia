import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

enum ReasonEnum {
	misdemeanour = "Misdemeanour",
	venting = "Venting",
}

interface Inputs {
	ConfessionSubject: string;
	ConfessionReason: ReasonEnum;
	ConfessionInfo: string;
}

export const Confessions: React.FC = () => {
	const {
		register,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
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
					<option value='Misdemeanour'>Misdemeanour</option>
					<option value='Venting'>Venting</option>
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
		</div>
	);
};
