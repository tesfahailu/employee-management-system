import React, { useEffect, useRef, useState } from 'react';
import {
  Typography,
  Link,
  makeStyles,
  Container,
  Grid,
  TextField,
  Button,
  Box,
  Card,
} from '@material-ui/core';
import { StyledLogo } from '../components/Logo';
import { CopyRight } from '../components/CopyRight';
import { RouteComponentProps } from 'react-router-dom';
import { MeDocument, MeQuery, useRegisterMutation } from '../generated/graphql';

const useStyles = makeStyles((theme) => ({
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
}));

enum ErrorMessage {
  USERNAME_TOO_SHORT = 'username must be greater than 5 alphanumeric characters.',
  USERNAME_MISMATCH = 'username does not match.',
  PASSWORD_TOO_SHORT = 'password must be greater than 5 alphanumeric charcters. ',
  PASSWORD_MISMATCH = 'password does not match.',
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

    if (username.length < 5) {
      setError((previousError) => ({
        ...previousError,
        username: ErrorMessage.USERNAME_TOO_SHORT,
      }));
      isInvalidInput = true;
    } else {
      setError((previousError) => ({
        ...previousError,
        username: '',
      }));
    }

    if (confirmUsername !== username) {
      setError((previousError) => ({
        ...previousError,
        confirmUsername: ErrorMessage.USERNAME_MISMATCH,
      }));
      isInvalidInput = true;
    } else {
      setError((previousError) => ({
        ...previousError,
        confirmUsername: '',
      }));
    }

    if (password.length < 5) {
      setError((previousError) => ({
        ...previousError,
        password: ErrorMessage.PASSWORD_TOO_SHORT,
      }));
      isInvalidInput = true;
    } else {
      setError((previousError) => ({
        ...previousError,
        password: '',
      }));
    }

    if (confirmPassword !== password) {
      setError((previousError) => ({
        ...previousError,
        confirmPassword: ErrorMessage.PASSWORD_MISMATCH,
      }));
      isInvalidInput = true;
    } else {
      setError((previousError) => ({
        ...previousError,
        confirmPassword: '',
      }));
    }

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
                variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
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
            variant="contained"
            color="primary"
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
