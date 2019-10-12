import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/location/").then(res => {
      setLocation(res.data.results);
    });
  }, []);

  console.log(location);
  return (
    <section className="">
      {location.map(loc => {
        return (
          <LocationCard
            name={loc.name}
            type={loc.image}
            dimension={loc.location}
            residents={loc.status}
          />
        );
      })}
    </section>
  );
}
