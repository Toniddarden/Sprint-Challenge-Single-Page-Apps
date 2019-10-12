import React from "react";


export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
    <img src={type} />
    <h1>{name}</h1>
   <p>{residents}</p>
   <p>{dimension}</p>
  </div>
  )
}
