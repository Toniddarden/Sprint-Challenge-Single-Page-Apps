import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm() {
  const [searchChar, setSearchChar] = useState("");
  const [searchCharResults, setCharResults] = useState([]);

  const charArray = CharacterList();
  console.log(charArray);

  useEffect(() => {
    const results = charArray.filter(chars =>
      chars.toLowerCase().includes(searchChar)
    );
    setCharResults(results);
  }, [searchChar]);

  const handleChange = e => {
    setSearchChar(e.target.value);
    console.log(searchChar);
  };

  return (
    <section activeclassname="search-form">
      <form>
        <label htmlFor="name">Search</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchChar}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
