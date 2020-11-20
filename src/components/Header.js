import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrIToWubajBmiEZb-Egx6LzH60A_foYDn1WQ&usqp=CAU"
					alt="logo"
					className="header__logo"
				/>
			</Link>
			<div className="header__center">
				<input type="text" />
				<SearchIcon />
			</div>
			<div className="header__right">
				<h4>Become a Host</h4>
				<LanguageIcon />
				<ExpandMoreIcon />
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
