import React from "react";


export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
    <p>Type: {type}</p>
    <p>Name: {name}</p>
   <p>Resident: {residents}</p>
   <p>Dimension: {dimension}</p>
  </div>
  )
}
