import React from "react";
import { Form, Field } from "formik";
import styled from "styled-components";

const HeaderColor = styled.header`
  background-color: pink;
  padding: 50px;
`;
const TitleTop = styled.h1`
  color: black;
`;

export default function Header() {
  return (
    <HeaderColor className="ui centered">
      <TitleTop className="ui center">Rick &amp; Morty Fan Page</TitleTop>
      <Form>
        <label htmlFor="search">Search</label>
        <input id="search" name="search" type="text" />
      </Form>
    </HeaderColor>
  );
}
