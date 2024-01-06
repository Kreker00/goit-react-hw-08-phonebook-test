import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  font-size: 48px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 16px;
  background: rgba(30, 30, 30, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(103, 74, 74, 0.33);
  margin-bottom: 40px;

  div {
    margin-bottom: 10px;
  }

  label {
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 5px;
    text-align: center;
    display: block;
    width: 450px;
  }

  input {
    padding: 10px;
    width: 450px;
    font-size: 20px;
    box-sizing: border-box;
    background-color: transparent;
    color: white;
  }

  button {
    background-color: #d63431;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 450px;
  }

  button:hover {
    background-color: green;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
