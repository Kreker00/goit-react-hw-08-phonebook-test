import styled from 'styled-components';

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    padding: 8px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
