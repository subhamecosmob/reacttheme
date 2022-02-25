import React from "react";
import Dashboard from "../Dashboard";
import Footer from "../Footer";
import Header from "../Header";
import Menu from "../Menu";

const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Menu />
			<Dashboard />
			<Footer />
		</div>
	);
};

export default App;
