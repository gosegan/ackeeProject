import React from "react";

const Star = ({ marked, starId }) => {
  return (
    <span
      style={{ cursor: "pointer", color: "#ffeb00" }}
      data-star-id={starId}
      className="star"
      role="button"
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

const StarRating = ({ value, className, onChange }) => {
  const [rating, setRating] = React.useState(parseInt(value) || 0);
  const [selection, setSelection] = React.useState(0);
  const hoverOver = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id"))
      val = event.target.getAttribute("data-star-id");
    setSelection(val);
  };
  const noHover = {
    pointerEvents: "none",
  };
  const yesHover = {
    pointerEvents: "auto",
  };
  const handleClick = (e) => {
    const result = e.target.getAttribute("data-star-id") || rating;
    setRating(result);
    !!onChange && onChange(result);
  };
  return (
    <div
      className={className}
      onMouseOut={() => hoverOver(selection)}
      onClick={handleClick}
      onMouseOver={hoverOver}
      style={className === "card__stars" ? noHover : yesHover}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
};

export default StarRating;
