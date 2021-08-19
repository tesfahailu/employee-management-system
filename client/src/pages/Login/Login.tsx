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
import { MeDocument, MeQuery, useLoginMutation } from '../../generated/graphql';
import { setAccessToken } from '../../services/session/accessToken';
import { RouteComponentProps } from 'react-router';
import { CopyRight } from '../../modules/components/CopyRight';
import Logo from '../../modules/components/Logo';
import { LoginPageText } from '../../text';

enum ErrorMessage {
  UsernameEmpty = 'username required.',
  PasswordEmpty = 'password required. ',
}

export const Login = ({ history }: RouteComponentProps) => {
  const initialState = {
    username: '',
    password: '',
  };

  const [signIn, setSignIn] = useState(initialState);
  const [errors, setErrors] = useState<typeof initialState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    let errorText = '';

    switch (name) {
      case 'username':
        if (value === '') {
          errorText = ErrorMessage.UsernameEmpty;
        }
        break;
      case 'password':
        if (value === '') {
          errorText = ErrorMessage.PasswordEmpty;
        }
        break;
      default:
        return;
    }

    setSignIn((signIn) => ({ ...signIn, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: errorText }));
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [login] = useLoginMutation();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    let isInvalid = false;
    (Object.keys(signIn) as Array<keyof typeof signIn>).map((key) => {
      if (errors[key] !== '' || signIn[key] === '') {
        console.log('Sign in: ', signIn[key], 'Error: ', errors[key]);
        isInvalid = true;
      }
    });
    setIsButtonDisabled(isInvalid);
  }, [signIn, errors]);

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 10 }}>
      <Card
        sx={{
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Logo />
        <Typography component="h1" variant="h6">
          {LoginPageText.PageHeader}
        </Typography>
        <Box
          component="form"
          sx={{ width: '100%', marginTop: 1 }}
          onSubmit={async (e: any) => {
            e.preventDefault();
            try {
              const response = await login({
                variables: {
                  username: signIn.username,
                  password: signIn.password,
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
              setSignIn({ username: '', password: '' });
            }
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            id="username"
            label="username"
            onBlur={handleChange}
            autoComplete="username"
            autoFocus
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            id="password"
            label="Password"
            onChange={handleChange}
            type="password"
            autoComplete="current-password"
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button
            type="submit"
            fullWidth
            sx={{ mt: 3, mr: 0, mb: 2 }}
            disabled={isButtonDisabled}
          >
            {LoginPageText.ButtonSignin}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {LoginPageText.ButtonForgotPassword}
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" onClick={() => history.push('/register')}>
                {LoginPageText.ButtonRegister}
              </Link>
            </Grid>
          </Grid>
        </Box>
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
