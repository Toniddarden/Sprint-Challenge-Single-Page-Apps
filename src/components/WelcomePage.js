import React from "react";
import styled, { keyframes } from "styled-components"



const rotate = keyframes`
  from {
    transform: rotate(30deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 7s linear infinite;

  font-size: 1.5rem;
`;

const Image = styled.img `
align: center;

`


export default function WelcomePage() {
  return (
    <section>
      <header>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div></div>
        <Rotate>Welcome to the ultimate fan site!</Rotate>
      </header>
    </section>
  );
}
