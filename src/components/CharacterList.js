import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        setCharacters(res.data.results);
console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  console.log(characters);
  return (
    <section className="char">
      {characters.map((char) => {
        return (
          <CharacterCard key={char.id} name={char.name} image={char.image} location={char.location} status={char.status} origin={char.origin} />
        )
      })}
    </section>
  );
}
