import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { NavLinks } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <h1 style={{ color: '#fff' }}>Home</h1>
      </NavLink>
      {isLoggedIn && !location.pathname.includes('/contacts') && (
        <NavLinks>
          <NavLink to="/contacts" style={{ textDecoration: 'none' }}>
            Your Contacts
          </NavLink>
        </NavLinks>
      )}
    </>
  );
};
