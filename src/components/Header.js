import React from "react";
import WelcomePage from './WelcomePage';
import styled from 'styled-components';

const HeaderColor = styled.header`
background-color: pink;
padding: 50px;
`
const TitleTop = styled.h1 `
color: black;
`

export default function Header() {
  return (
    <HeaderColor className="ui centered">
      <TitleTop className="ui center">Rick &amp; Morty Fan Page</TitleTop>
      
    </HeaderColor>
  );
}
