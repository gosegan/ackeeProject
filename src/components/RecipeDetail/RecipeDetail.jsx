import React, { useState } from "react";
import food from "../../img/food.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faGlassCheers } from "@fortawesome/free-solid-svg-icons";
import Ingredient from "../Ingredient/Ingredient";
import StarRating from "../StarRating/StarRating";
import axios from "axios";

const RecipeDetail = (props) => {
  let recipe;
  props.data &&
    props.data["recipe-details"].forEach((item, index) => {
      const itemName = item.name
        .toLowerCase()
        .replace(/[&\\#,+()$~%.'":*?<>{}]/g, "")
        .replace(/ /g, "-");
      if (props.match.params.name === itemName) {
        recipe = props.data["recipe-details"][index];
        return recipe;
      }
    });

  const [rate, setRate] = useState(null);
  const starChange = (rate) => {
    setRate(rate);
  };

  const sendForm = () => {
    const grade = {
      score: rate,
    };

    const localGrade = {
      score: rate,
      id: recipe.id,
    };

    localStorage.setItem("rate", JSON.stringify(localGrade));

    axios
      .post(
        "https://my-json-server.typicode.com/AckeeCZ/web-task-cookbook-fake-api/recipes",
        grade
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  if (props.data) {
    return (
      <section className="detail">
        <div className="container">
          <div className="detail__wrapper item">
            <div className="detail__wrapper-add">
              <FontAwesomeIcon icon={faClipboardCheck} />
              <FontAwesomeIcon icon={faGlassCheers} />
              <figure>
                <img className="detail__img" src={food} alt="food"></img>
              </figure>
              <h1 className="detail__title">{recipe.name}</h1>
              <p className="detail__info">{recipe.info}</p>
              <p className="detail__duration">
                <FontAwesomeIcon icon={faClock} />
                {recipe.duration} minutes
              </p>
              <h3 className="detail__title-cook h3">Cooking</h3>
              <p className="detail__text">{recipe.description}</p>
              <h3 className="detail__title-ing h3">Ingredients:</h3>
              <ul className="detail__list">
                {recipe.ingredients &&
                  recipe.ingredients.map((item, index) => {
                    return <Ingredient key={index} index={index} ingredient={item} />;
                  })}
              </ul>
            </div>
            <div className="detail__rate">
              <StarRating onChange={starChange} className="detail__stars" value={0} />
              <button onClick={sendForm} className="detail__btn btn">
                Rate for this recipe!
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default RecipeDetail;
