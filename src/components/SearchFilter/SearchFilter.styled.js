import styled from 'styled-components';

export const ContactTitle = styled.h2`
  text-align: center;
  color: #fff;
`;

export const StyledSearchFilter = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 5px;
    font-size: 18px;
    text-align: center;
    color: #fff;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);

  &:focus {
    border-color: #d63431;
  }
`;
