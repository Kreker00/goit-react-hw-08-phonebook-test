import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Your Contacts</NavLink>}
    </header>
  );
};
