import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Head from "./components/Head/Head";
import Home from "./Home/Home";
import { Route } from "react-router";
import AddRecipe from "./AddRecipe/AddRecipe";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import Footer from "./components/Footer/Footer";

const useFetch = () => {
  const [data, updateData] = useState(null);
  const requestUrl =
    "https://my-json-server.typicode.com/AckeeCZ/web-task-cookbook-fake-api/db";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requestUrl);
      updateData(response.data);
    };
    fetchData();
  }, []);
  return data;
};

const App = () => {
  const result = useFetch();
  return (
    <div className="App">
      <Head />
      <Route path="/" exact render={() => <Home data={result} />} />
      <Route path="/add" exact render={() => <AddRecipe data={result} />} />
      <Route
        path="/recipes/:name"
        exact
        render={(props) => <RecipeDetail {...props} data={result} />}
      />
      <Footer />
    </div>
  );
};

export default App;
