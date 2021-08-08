import React, { useEffect, useRef, useState } from 'react';
import {
  Typography,
  Link,
  Container,
  TextField,
  Button,
  Grid,
  Box,
  Card,
  Snackbar,
  Alert,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { MeDocument, MeQuery, useLoginMutation } from '../../generated/graphql';
import { setAccessToken } from '../../services/session/accessToken';
import { RouteComponentProps } from 'react-router';
import { CopyRight } from '../../modules/components/CopyRight';
import Logo from '../../modules/components/Logo';

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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }),
);

enum ErrorMessage {
  UsernameEmpty = 'username required.',
  PasswordEmpty = 'password required. ',
}

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [login] = useLoginMutation();

  const [open, setOpen] = React.useState(false);

  const [error, setError] = useState({
    username: '',
    password: '',
  });

  const formValidation = () => {
    let isInvalidInput = false;

    let usernameErrorText = '';
    if (username === '') {
      usernameErrorText = ErrorMessage.UsernameEmpty;
      isInvalidInput = true;
    }
    setError((previousError) => ({
      ...previousError,
      username: usernameErrorText,
    }));

    let passwordErrorText = '';
    if (password === '') {
      passwordErrorText = ErrorMessage.PasswordEmpty;
      isInvalidInput = true;
    }
    setError((previousError) => ({
      ...previousError,
      password: passwordErrorText,
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
  }, [username, password]);

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
      <Card className={classes.card}>
        <Logo />
        <Typography component="h1" variant="h6">
          Sign In
        </Typography>
        <form
          className={classes.form}
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await login({
                variables: {
                  username,
                  password,
                },
                update: (store, { data }) => {
                  if (!data) return null;
                  store.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: { __typename: 'Query', me: data.login.user },
                  });
                },
              });

              if (response && response.data)
                setAccessToken(response.data.login.accessToken);

              history.push('/employees');
            } catch (error) {
              setOpen(true);
              setUserName('');
              setPassword('');
            }
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="username"
            autoFocus
            error={!!error.username}
            helperText={error.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
            error={!!error.password}
            helperText={error.password}
          />
          <Button
            type="submit"
            fullWidth
            className={classes.submit}
            disabled={isButtonDisabled}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" onClick={() => history.push('/register')}>
                Don't have an account? Register!
              </Link>
            </Grid>
          </Grid>
        </form>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error">
          Error signing in. Please check your username and password.
        </Alert>
      </Snackbar>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
};
