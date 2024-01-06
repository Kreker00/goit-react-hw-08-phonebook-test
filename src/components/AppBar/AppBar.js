import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { StyledAppBar, StyledToolbar } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledToolbar>
    </StyledAppBar>
  );
};
