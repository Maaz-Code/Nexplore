import React from "react";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Movies from "./components/Movies";
import Anime from "./components/Anime";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import Footer from "./components/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recommend' component={Recommend} />
        <Route exact path='/songs' component={Songs} />
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/anime' component={Anime} />
        <Route exact path="/recommend/form" component={Form} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
