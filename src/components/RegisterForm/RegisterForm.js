import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  StyledRegisterButton,
  StyledRegisterForm,
  StyledRegisterFormContainer,
  StyledRegisterTextField,
  StyledTypography,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledRegisterFormContainer>
      <StyledTypography component="h1" variant="h5">
        Please fill in all registration fields
      </StyledTypography>
      <StyledRegisterForm onSubmit={handleSubmit} autoComplete="off">
        <StyledRegisterTextField
          label="Username"
          type="text"
          name="name"
          required
        />
        <StyledRegisterTextField
          label="Email"
          type="email"
          name="email"
          required
        />
        <StyledRegisterTextField
          label="Password"
          type="password"
          name="password"
          required
        />
        <StyledRegisterButton type="submit">Register</StyledRegisterButton>
      </StyledRegisterForm>
    </StyledRegisterFormContainer>
  );
};
