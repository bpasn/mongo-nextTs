'use client';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

type Props = {}

const LoginScreen = (props: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
    // <Container component={'div'} maxWidth="xs">
    //   <Box
    //     sx={{
    //       marginTop: 8,
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center'
    //     }}>

    //   </Box>
    //   <Typography component="h1" variant="h5">
    //     Sign In
    //   </Typography>
    //   <Box component={"form"} noValidate sx={{ mt: 3 }}>
    //     <Grid container spacing={2}>
    //       <Grid item xs={12} sm={12}>
    //         <TextField
    //           autoComplete="given-name"
    //           name="Email"
    //           required
    //           fullWidth
    //           id="email"
    //           label="email"
    //           autoFocus
    //         >
    //         </TextField>
    //       </Grid>
    //       <Grid item xs={12} sm={12}>
    //         <TextField
    //           autoComplete="given-name"
    //           name="Password"
    //           required
    //           fullWidth
    //           id="password"
    //           label="password"
    //         >
    //         </TextField>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Container>
  )
}

export default LoginScreen