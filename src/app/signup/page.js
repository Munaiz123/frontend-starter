"use client"
import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { CognitoIdentityProviderClient, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";

import { AWS_CONFIG, SIGN_UP_OBJ } from '@/utils/utils';

import ConfirmSignUp from './confirmSignUp';

import styles from '../page.module.css'


export default function SignUp() {
    const [isClient, setIsClient] = useState(false)
    const [showConfirmPage, setShowConfirmPage] = useState(false)

    useEffect(()=>{
        setIsClient(true)
    })

  const handleSubmit = async event => {
    event.preventDefault();
    
    let data = new FormData(event.currentTarget);
    let userPoolReqObj = createUserpoolObj(data,SIGN_UP_OBJ)
    let client = new CognitoIdentityProviderClient(AWS_CONFIG);
    let command = new SignUpCommand(userPoolReqObj);
    console.log("🚀 ~ file: page.js:36 ~ handleSubmit ~ command:", command)
    

    try {
      // let response = await client.send(command);
      // console.log("🚀 ~ file: page.js:35 ~ handleSubmit ~ RESPONSE:", JSON.stringify(response))
      // if(response.$metadata.httpStatusCode === 200) setShowConfirmPage(true)
      setShowConfirmPage(true)
      
    } catch (error) {
      console.error("🚀 ~ file: page.js:37 ~ handleSubmit ~ ERROR =>>:", error)
    }
    
  };

  const createUserpoolObj = (data, SIGN_UP_OBJ) => {
    SIGN_UP_OBJ.Username = data.get('firstName')
    SIGN_UP_OBJ.Password = data.get('password')
    
    SIGN_UP_OBJ.UserAttributes = [
      {
        Name:'name',
        Value:`${data.get('firstName')} ${data.get('lastName')}`
      },
      {
        Name:"email",
        Value:data.get('email')
      }
    ]

    SIGN_UP_OBJ.ValidationData = [
      {
        Name: "Username", // required
        Value: data.get('firstName'),
      }
    ]

    return SIGN_UP_OBJ

  }

  return (
      isClient && <main className={styles.main}>

      {showConfirmPage ? < ConfirmSignUp/> :
      
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

          </Avatar>
          <Typography component="h1" variant="h5"> Sign Up </Typography>
          
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
      </Container>}
      </main>
  );
}


  // console.log("data",{
    //   email: data.get('email'),
    //   password: data.get('password'),
    //   confirmPassword:data.get('confirmPassword'),
    //   firstName: data.get('firstName'),
    //   lastName: data.get('lastName')
    // });