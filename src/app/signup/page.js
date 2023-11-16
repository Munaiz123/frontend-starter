"use client"
import LinkRoute from 'next/link';
import styles from '../page.module.css'

import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignUp() {
    const [isClient, setIsClient] = useState(false)

    useEffect(()=>{
        setIsClient(true)
    })

  const handleSubmit = (event) => {
    console.log("🚀 ~ file: page.js:23 ~ handleSubmit ~ event:", event)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("🚀 ~ file: page.js:26 ~ handleSubmit ~ data:", data.entries())
    console.log("data",{
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('')
    });
  };

  return (
      isClient && <main className={styles.main}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" 
            onSubmit={handleSubmit}
            noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link variant="body2" href="/login" >
                    {/* <LinkRoute variant="body2" href="/signup"> */}
                    Already have an account? Sign In
                      {/* </LinkRoute> */}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </main>
  );
}
