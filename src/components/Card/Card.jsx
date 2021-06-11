import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import food from "../../img/food.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../StarRating/StarRating";

const Card = (props) => {
  const { name, duration, score, id } = props;
  const rates = JSON.parse(localStorage.getItem("rate"));
  return (
    <div id={id} className="card__item item">
      <figure className="card__img-wrapper">
        <img className="card__img" src={food} alt="food"></img>
      </figure>
      <h2 className="h2 card__title">{name}</h2>
      <p className="card__duration">
        <FontAwesomeIcon icon={faClock} />
        {duration} min.
      </p>
      <StarRating className="card__stars" value={id === rates?.id ? rates.score : score} />
      <NavLink
        className="card__btn btn"
        to={`/recipes/${name
          .toLowerCase()
          .replace(/[&\\#,+()$~%.'":*?<>{}]/g, "")
          .replace(/ /g, "-")}`}
      >
        Rate this dish!
      </NavLink>
    </div>
  );
};

export default withRouter(Card);
