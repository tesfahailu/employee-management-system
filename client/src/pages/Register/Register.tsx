import React, { useEffect, useState } from 'react';
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
import { RouteComponentProps } from 'react-router-dom';
import {
  MeDocument,
  MeQuery,
  useRegisterMutation,
} from '../../generated/graphql';
import { CopyRight } from '../../modules/components/CopyRight';
import Logo from '../../modules/components/Logo';
import { minMaxLength, userExists } from '../../modules/utils/errorCheck';
import { RegisterErrorText as ErrorText, RegisterPageText } from '../../text';

function checkUsername(username: string, setErrors: any) {
  let errorText = '';
  if (minMaxLength(username, 5)) {
    errorText = ErrorText.UsernameTooShort;
  } else {
    userExists(username).then((result) => {
      if (result) {
        errorText = ErrorText.UsernameAlreadyExist;
      } else {
        errorText = '';
      }
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        username: errorText,
      }));
    });
  }
  return errorText;
}

function checkConfirmUsername(username: string, confirmUsername: string) {
  let errorText = '';
  if (username !== confirmUsername) {
    errorText = ErrorText.UsernameMismatch;
  }
  return errorText;
}

function checkPassword(password: string) {
  let errorText = '';
  if (minMaxLength(password, 5)) {
    errorText = ErrorText.PasswordTooShort;
  }
  return errorText;
}

function checkConfirmPassword(password: string, confirmPassword: string) {
  let errorText = '';
  if (password !== confirmPassword) {
    errorText = ErrorText.PasswordMismatch;
  }
  return errorText;
}

export const Register = ({ history }: RouteComponentProps) => {
  const initialState = {
    username: '',
    confirmUsername: '',
    password: '',
    confirmPassword: '',
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState<typeof initialState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    let errorText: string;

    switch (name) {
      case 'username':
        errorText = checkUsername(value, setErrors);
        break;
      case 'confirmUsername':
        errorText = checkConfirmUsername(user.username, value);
        break;
      case 'password':
        errorText = checkPassword(value);
        break;
      case 'confirmPassword':
        errorText = checkConfirmPassword(user.password, value);
        break;
      default:
        return;
    }
    setUser((user) => ({ ...user, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorText,
    }));
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [register] = useRegisterMutation();

  useEffect(() => {
    let isInvalid = false;
    (Object.keys(user) as Array<keyof typeof user>).map((key) => {
      if (errors[key] !== '' || user[key] === '') {
        isInvalid = true;
      }
    });
    setIsButtonDisabled(isInvalid);
  }, [user, errors]);

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 12 }}>
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
          {RegisterPageText.PageHeader}
        </Typography>
        <Container
          component="form"
          sx={{ width: '100%', mt: 3 }}
          onSubmit={async (e: React.SyntheticEvent) => {
            e.preventDefault();
            await register({
              variables: {
                username: user.username,
                password: user.password,
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
                name="username"
                onBlur={handleChange}
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                error={!!errors.username}
                helperText={errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmUsername"
                onBlur={handleChange}
                required
                fullWidth
                id="confirmUsername"
                label="Confirm Username"
                error={!!errors.confirmUsername}
                helperText={errors.confirmUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                name="password"
                onBlur={handleChange}
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="current-password"
                name="confirmPassword"
                onChange={handleChange}
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            sx={{ mt: 3, mr: 0, mb: 2 }}
            disabled={isButtonDisabled}
          >
            {RegisterPageText.ButtonRegister}
          </Button>
          <Grid container>
            <Grid item>
              <Link variant="body2" onClick={() => history.push('/login')}>
                {RegisterPageText.ButtonSignin}
              </Link>
            </Grid>
          </Grid>
        </Container>
        <Box mt={5}>
          <CopyRight />
        </Box>
      </Card>
    </Container>
  );
};
