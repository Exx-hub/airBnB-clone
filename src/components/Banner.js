import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Banner.css";
import Search from "./Search";

function Banner() {
	const [showSearch, setShowSearch] = useState(false);
	const history = useHistory();
	const searchToggle = () => {
		setShowSearch(!showSearch);
	};
	const goToSearchPage = () => {
		history.push("/results");
	};
	return (
		<div className="banner">
			<div className="banner__search">
				{showSearch && <Search />}
				<Button
					variant="outlined"
					className="banner__searchButton"
					onClick={searchToggle}
				>
					{showSearch ? "Hide" : "Search Dates"}
				</Button>
			</div>
			<div className="banner__info">
				<h1>Get out and stretch your imagination</h1>
				<p>
					Plan a different kind of getaway to uncover the hidden gems near you.
				</p>

				<Button variant="outlined" onClick={goToSearchPage}>
					Explore nearby
				</Button>
			</div>
		</div>
	);
}

export default Banner;
