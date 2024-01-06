import styled from '@emotion/styled';

export const StyledUserMenu = styled.div`
  color: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 16px;
  background: rgba(30, 30, 30, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(103, 74, 74, 0.33);
`;

export const StyledWelcomeMessage = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const StyledLogoutButton = styled.button`
  margin-left: auto;
  background-color: #d63431;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: green;
  }
`;
