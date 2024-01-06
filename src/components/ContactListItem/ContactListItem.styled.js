import styled from 'styled-components';

export const StyledContactListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    font-size: 32px;
    color: #fff;
    transition: color 0.3s ease-in-out;
  }

  span {
    margin-top: 5px;
    font-size: 24px;
    color: blueviolet;
  }

  &:hover,
  &:focus {
    p {
      color: black;
    }
  }
`;
