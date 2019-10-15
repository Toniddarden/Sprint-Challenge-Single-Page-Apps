import React from "react";
import styled from 'styled-components';


const UnLi = styled.ul`
color: black;

`

const Wrapper = styled.div `
background-color: papayawhip;
`


export default function CharacterCard(props) {
  return(
  <Wrapper className='char'>
    <img src={props.image} />
    <UnLi>
      <li>{props.name}</li>
      <li>{props.status}</li>
      <li> Location: {props.location.name}</li>
      <li>Origin: {props.origin.name}</li>
    </UnLi>
  </Wrapper>

  )
}
