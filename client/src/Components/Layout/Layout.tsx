import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Layout.css";
export const Layout: React.FC = () => (
	<div className='PageContainer'>
		<Header />
		<div className='MainContent'>
			<Outlet />
		</div>
		<Footer />
	</div>
);
