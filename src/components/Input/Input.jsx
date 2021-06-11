import React from "react";

const Input = ({ type = "text", onChange, placeholder, name, value }) => {
  const handleChange = (event) => {
    !!onChange && onChange({ key: name, value: event.target.value });
  };

  return (
    <input
      className="form__input"
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
