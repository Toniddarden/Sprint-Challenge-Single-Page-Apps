import React from "react";



export default function CharacterCard(props) {
  return(
  <div>
    <img src={props.image} />
    {props.name}
    <p>{props.status}</p>
    Location: {props.location.name}<br/>
    Origin: {props.origin.name}
  </div>
  )
}
