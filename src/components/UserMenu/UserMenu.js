import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import {
  StyledUserMenu,
  StyledWelcomeMessage,
  StyledLogoutButton,
} from './UserMenu.styled.js';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenu>
      <StyledWelcomeMessage>Welcome Back, {user.name}</StyledWelcomeMessage>
      <StyledLogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledLogoutButton>
    </StyledUserMenu>
  );
};
