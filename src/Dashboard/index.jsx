import React from "react";

import { Grid, Box } from "@mui/material";
import NavBar from "../NavBar";
const navBarStyle = {
	height: "100vh",
	display: "flex",
	justifyContent: "center",

	borderRight: "1px solid #cccccc94",
	paddingTop: "0px",
};
const DashBoard = () => {
	return (
		<Box sx={{ height: "100vh" }}>
			<Grid container={{ marginTop: "0px" }}>
				<Grid item xs={2} md={2} sx={navBarStyle}>
					<NavBar />
				</Grid>
				<Grid item xs={true}>
					asdasd
				</Grid>
			</Grid>
		</Box>
	);
};

export default DashBoard;
