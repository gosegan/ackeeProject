import React from "react";
import Card from "../components/Card/Card";

const Home = (props) => {
  return (
    <section className="card">
      <div className="container">
        <div className="card__wrapper">
          {props.data &&
            props.data.recipes.map((item, index) => {
              return (
                <Card
                  key={index}
                  score={item.score}
                  id={item.id}
                  name={item.name}
                  duration={item.duration}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Home;
