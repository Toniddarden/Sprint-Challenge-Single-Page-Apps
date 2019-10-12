import React from "react";
import { Route, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";

import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import LocationCard from "./components/LocationCard";
import LocationList from "./components/LocationsList";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />

      <NavLink exact to="/" activeClassName="">
        Home
      </NavLink>
      <div />
      <NavLink exact to="/characters" activeClassName="">
        Characters
      </NavLink>
      <div />
      <NavLink exact to="/locations" activeClassName="">
        Locations
      </NavLink>

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationCard} />
    </main>
  );
}
