import React from "react";

const Ingredient = (props) => {
  return (
    <li className="detail__ingredient">
      {props.index + 1}. {props.ingredient}
    </li>
  );
};

export default Ingredient;
