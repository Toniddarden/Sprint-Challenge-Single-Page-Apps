import React from "react";
import styled from 'styled-components';



export default function CharacterCard(props) {
  return(
  <div>
    <img src={props.image} />
    <ul>
      <li>{props.name}</li>
      <li>{props.status}</li>
      <li> Location: {props.location.name}</li>
      <li>Origin: {props.origin.name}</li>
    </ul>
  </div>

  )
}
