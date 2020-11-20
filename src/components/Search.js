import React, { useState } from "react";
import "../styles/Search.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

import PeopleIcon from "@material-ui/icons/People";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function Search() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	// console.log(
	// 	startDate.getDate(),
	// 	startDate.getMonth(),
	// 	startDate.getFullYear()
	// );
	// console.log(endDate);

	const history = useHistory();

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};
	return (
		<div className="search">
			<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
			<div className="search__guests">
				<h2>Number of Guests</h2>
				<PeopleIcon />
			</div>
			<input type="number" placeholder="0" min={0} />
			<Button onClick={() => history.push("/results")}>Search Airbnb</Button>
		</div>
	);
}

export default Search;
