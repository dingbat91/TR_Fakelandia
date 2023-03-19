import React from "react";

export const Confessions: React.FC = () => {
	return (
		<div>
			<form>
				<label htmlFor='ConfessionSubject'>Subject</label>
				<input name='ConfessionSubject' id='ConfessionSubject' type='text' />
				<label htmlFor='Reason'>Reason for Contact</label>
				<select name='Reason' id='Reason'>
					<option value='Confession'>Confession</option>
					<option value='Report'>Report</option>
					<option value='Question'>Question</option>
				</select>
				<label htmlFor='ConfessionInfo'>Details</label>
				<textarea name='ConfessionInfo' id='ConfessionInfo'></textarea>
				<button>Submit</button>
			</form>
		</div>
	);
};
