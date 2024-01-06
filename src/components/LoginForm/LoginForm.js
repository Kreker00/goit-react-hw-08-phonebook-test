import { Copyright } from '@mui/icons-material';
import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  StyledButton,
  StyledLink,
  StyledLoginFormContainer,
  StyledTextField,
  StyledTypography,
} from './LoginForm.styled';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledLoginFormContainer component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon sx={{ backgroundColor: 'black' }} />
          </Avatar>
          <StyledTypography component="h1" variant="h5">
            Sign in
          </StyledTypography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <StyledTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <StyledTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </StyledButton>
            <Grid container>
              <Grid item xs>
                <StyledLink
                  href="#"
                  variant="body2"
                  onClick={() =>
                    toast.error(
                      "Sorry, but we don't know your password either. Try to remember or create a new account"
                    )
                  }
                >
                  Forgot password?
                </StyledLink>
              </Grid>
              <Grid item>
                <StyledLink component={Link} to="/register">
                  {"Don't have an account? Sign Up"}
                </StyledLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </StyledLoginFormContainer>
    </ThemeProvider>
  );
};
