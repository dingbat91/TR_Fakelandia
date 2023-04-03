import React from "react";
import "./home.css";

export const Home: React.FC = () => {
	return (
		<main className='HomePage'>
			<article className='HomePage__Container'>
				<h2 className='HomePage__Title'>Welcome!</h2>
				<div className='HomePage__Content'>
					<p>Welcome to the home of the Justice Department of Fakelandia.</p>
					<p>
						Here you can browse a list of recent misdemeanours committed by our
						citizens, or you can confess to your own misdemeanour
					</p>
				</div>
			</article>
		</main>
	);
};
