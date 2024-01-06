import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled('div')({
  display: 'flex',
  gap: '10px',
});

export const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'black',
  padding: '8px',
  borderRadius: '5px',
  backgroundColor: 'lightgray',
  '&:hover': {
    backgroundColor: 'gray',
  },
});
