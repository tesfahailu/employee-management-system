import React, { useState } from 'react';
import {
  Typography,
  Link,
  makeStyles,
  Container,
  TextField,
  Button,
  Grid,
  Box,
  Card,
} from '@material-ui/core';
import { StyledLogo } from '../components/Logo';
import { CopyRight } from '../components/CopyRight';
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';
import { setAccessToken } from '../services/session/accessToken';
import { RouteComponentProps } from 'react-router';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Card className={classes.card}>
        <StyledLogo />
        <Typography component="h1" variant="h6">
          Sign In
        </Typography>
        <form
          className={classes.form}
          onSubmit={async (e) => {
            e.preventDefault();
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

            history.push('/');
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="username"
            autoFocus
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="current-password"
            color="primary"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
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
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
};
