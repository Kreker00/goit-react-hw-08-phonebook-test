import React from 'react';
import { StyledHomeContainer, StyledContent } from './Home.styled';

export default function Home() {
  return (
    <StyledHomeContainer>
      <StyledContent>
        <h2>Hello!!! Welcome to the pages of our service.</h2>
        <h2>This is your contact book.</h2>
        <h2>Here you can save and conveniently search your contacts.</h2>
        <h2>
          To start using the service, you must register or Log in if you already
          have an account.
        </h2>
        <h2>Enjoy using it!</h2>
      </StyledContent>
    </StyledHomeContainer>
  );
}
