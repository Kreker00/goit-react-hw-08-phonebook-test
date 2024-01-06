import React from 'react';
import { StyledNav, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </StyledNav>
  );
};
