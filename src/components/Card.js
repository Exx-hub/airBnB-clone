import React from "react";
import "../styles/Card.css";

function Card({ image, title, text, price }) {
	return (
		<div className="card">
			<img src={image} alt="" />
			<div className="card__info">
				<h2>{title}</h2>
				<h4>{text}</h4>
				{price && <h3>{price}</h3>}
			</div>
		</div>
	);
}

export default Card;
