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
      <NavLink exact to="/location" activeClassName="">
        Locations
      </NavLink>

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/location" component={LocationCard} />
    </main>
  );
}

// Explain benefit(s) using client-side routing?

// Answr: Client side routing is ran and passed through the clients local machine (browser)! It allows for faster routing without refresh and 
// quicker runtime. The client can create and store data in realtime without waiting for the server to respond it does it automatically becauses 
// its done on their local browser. Each page is rendered through a route and always sent back to the parent w/o refresh. 
