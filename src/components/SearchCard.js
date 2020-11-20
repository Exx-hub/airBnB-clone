import React from "react";
import "../styles/SearchCard.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchCard({
	image,
	location,
	title,
	features,
	rating,
	price,
	total,
}) {
	return (
		<div className="searchCard">
			<img src={image} alt="" />
			<div className="searchCard__info">
				<div className="searchCard__like">
					<p>{location}</p>
					<FavoriteBorderIcon className="searchResult__heart" />
				</div>
				<h4>{title}</h4>
				<hr />
				<p>{features}</p>
				<div className="searchCard__bottom">
					<div className="searchCard__rating">
						<StarIcon className="searchCard__starIcon" />
						<h4>{rating}</h4>
					</div>
					<div className="searchCard__price">
						<h2>{price}</h2>
						<h4>{total}</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchCard;
