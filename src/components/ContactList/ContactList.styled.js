import styled from 'styled-components';

export const StyledContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: space-around;
`;

export const StyledContactItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease-in-out;
  background: rgba(30, 30, 30, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(103, 74, 74, 0.33);

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledContactInfo = styled.div`
  color: #fff;
  text-align: center;

  p {
    font-size: 18px;
    margin: 0;
  }

  span {
    font-size: 16px;
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 5px 10px;
  border: none;
  width: 30px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
  align-self: center;

  &:hover,
  &:focus {
    background-color: rgba(255, 99, 71, 0.3);

    &::before {
      color: black;
    }
  }

  &::before {
    content: '\2716';
    font-size: 20px;
  }
`;
