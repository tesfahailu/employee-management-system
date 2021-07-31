import React, { useEffect, useRef, useState } from 'react';
import {
  Typography,
  Link,
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Card,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import {
  MeDocument,
  MeQuery,
  useRegisterMutation,
} from '../../generated/graphql';
import { CopyRight } from '../../modules/components/CopyRight';
import { StyledLogo } from '../../modules/components/Logo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 100,
    },
    card: {
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
);

enum ErrorMessage {
  UsernameTooShort = 'username must be greater than 5 characters.',
  UsernameCharacterError = 'username should only include numbers, letters, and underscores.',
  UsernameMismatch = 'username does not match.',
  PasswordTooShort = 'password must be greater than 5 alphanumeric charcters. ',
  PasswordMismatch = 'password does not match.',
}

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [confirmUsername, setConfirmUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState({
    username: '',
    confirmUsername: '',
    password: '',
    confirmPassword: '',
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [register] = useRegisterMutation();

  const formValidation = () => {
    let isInvalidInput = false;

    let usernameErrorText = '';
    if (username.length < 5) {
      usernameErrorText = ErrorMessage.UsernameTooShort;
      isInvalidInput = true;
    } else if (!RegExp('^[a-zA-Z0-9_]*$').test(username)) {
      usernameErrorText = ErrorMessage.UsernameCharacterError;
      isInvalidInput = true;
    }
    setError((previousError) => ({
      ...previousError,
      username: usernameErrorText,
    }));

    let confirmUsernameErrorText = '';
    if (confirmUsername !== username) {
      confirmUsernameErrorText = ErrorMessage.UsernameMismatch;
      isInvalidInput = true;
    }
    setError((previousError) => ({
      ...previousError,
      confirmUsername: confirmUsernameErrorText,
    }));

    let passwordErrorText = '';
    if (password.length < 5) {
      passwordErrorText = ErrorMessage.PasswordTooShort;
      isInvalidInput = true;
    }
    setError((previousError) => ({
      ...previousError,
      password: passwordErrorText,
    }));

    let confirmPasswordErrorText = '';
    if (confirmPassword !== password) {
      confirmPasswordErrorText = ErrorMessage.PasswordMismatch;
      isInvalidInput = true;
    }
    setError((previousError) => ({
      ...previousError,
      confirmPassword: confirmPasswordErrorText,
    }));

    return isInvalidInput;
  };

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setIsButtonDisabled(formValidation());
  }, [username, confirmUsername, password, confirmPassword]);

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Card className={classes.card}>
        <StyledLogo />
        <Typography component="h1" variant="h6">
          Register New User
        </Typography>
        <form
          className={classes.form}
          onSubmit={async (e) => {
            e.preventDefault();
            await register({
              variables: {
                username,
                password,
              },
              update: (store, { data }) => {
                if (!data) return null;
                store.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: { __typename: 'Query', me: data.register.user },
                });
              },
            });
            history.push('/');
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                error={!!error.username}
                helperText={error.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={confirmUsername}
                onChange={(e) => setConfirmUsername(e.target.value)}
                required
                fullWidth
                id="confirmUsername"
                label="Confirm Username"
                error={!!error.confirmUsername}
                helperText={error.confirmUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                error={!!error.password}
                helperText={error.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                fullWidth
                id="confirmPassword"
                label="Password"
                type="password"
                error={!!error.confirmPassword}
                helperText={error.confirmPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            className={classes.submit}
            disabled={isButtonDisabled}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link variant="body2" onClick={() => history.push('/login')}>
                Already have an accout? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        <Box mt={5}>
          <CopyRight />
        </Box>
      </Card>
    </Container>
  );
};
