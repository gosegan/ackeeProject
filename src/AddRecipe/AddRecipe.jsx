import axios from "axios";
import React, { Fragment, useState } from "react";
import Input from "../components/Input/Input";

const AddRecipe = () => {
  let inputsData = [
    { name: "name", placeholder: "Name of recipe" },
    { name: "description", placeholder: "Description" },
    { name: "ingredients", placeholder: "Ingredient" },
    { name: "duration", placeholder: "Duration", type: "number" },
    { name: "info", placeholder: "Info" },
  ];
  const initialState = {
    name: "",
    description: "",
    ingredients: [""],
    duration: "",
    info: "",
  };
  const [ingrCount, setIngrCount] = useState(1);
  const [recipe, setRecipe] = useState(initialState);

  const changeValue = ({ key, value }) => {
    setRecipe({ ...recipe, [key]: value });
  };
  const ingrsChange = (index, value) => {
    let newIngredients = recipe.ingredients;
    newIngredients[index] = value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };
  let ingrs = [];
  for (let i = 0; i < ingrCount; i++) {
    ingrs.push(
      <Input
        key={i}
        name={"ingredients"}
        value={recipe.ingredients[i]}
        onChange={({ value }) => ingrsChange(i, value)}
        placeholder={`Ingredient ${i + 1}`}
      />
    );
  }
  const addIngredient = () => {
    let newIngrs = recipe.ingredients.push("");
    setRecipe({ ...recipe, ingrs: newIngrs });
    setIngrCount(ingrCount + 1);
  };

  const getValue = () => {
    localStorage.setItem("recipe", JSON.stringify(recipe));
    axios
      .post(
        "https://my-json-server.typicode.com/AckeeCZ/web-task-cookbook-fake-api/recipe-details",
        recipe
      )
      .then((response) => {
        console.log(response);
        setIngrCount(1);
        setRecipe(initialState);
      })
      .catch((error) => console.error(error));
  };
  return (
    <section className="add">
      <div className="container">
        <h1 className="h1 add__title">Add your own recipe!</h1>
        <div className="form">
          {inputsData.map((item, index) => {
            return (
              <Fragment key={index}>
                {item.name !== "ingredients" && (
                  <Input
                    name={item.name}
                    value={recipe[item.name]}
                    onChange={changeValue}
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                )}
                {item.name === "ingredients" && (
                  <>
                    {ingrs}
                    <button onClick={addIngredient} className="form__additional-btn">
                      Add ingredient +
                    </button>
                  </>
                )}
              </Fragment>
            );
          })}
          <button onClick={getValue} className="form__btn btn">
            Add new recipe
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddRecipe;
