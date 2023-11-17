"use client"
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/navigation';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import styles from '../page.module.css'

import { AWS_CONFIG, CONFIRM_SIGN_UP_OBJ } from '@/utils/utils';
import { CognitoIdentityProviderClient, ConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider";

export default function ConfirmSignUp(props) {
    const { push } = useRouter();

    const [isClient, setIsClient] = useState(false)
    const [userData, setUserData] = useState(undefined)

    useEffect(()=>{
        setIsClient(true)
        setUserData(props.userData)
    },[])

  const handleSubmit = async event => {
    event.preventDefault();
    
    let data = new FormData(event.currentTarget);
    let userPoolConfirmReqObj = createUserpoolConfirmObj(data, CONFIRM_SIGN_UP_OBJ)
    console.log('Cofirm REQ Obj =>> ', userPoolConfirmReqObj)

    let client = new CognitoIdentityProviderClient(AWS_CONFIG);
    let command = new ConfirmSignUpCommand(userPoolConfirmReqObj);

    try {
        const response = await client.send(command);
        console.log(" Confirm Sign Up ~> API response:", JSON.stringify(response))
        if(response.$metadata.httpStatusCode === 200){
            
            push('/dashboard');
        }

    } catch (error) {
        console.error("Cofirm Sign UP ~> API - Error:", error)   
    }
  };

  const createUserpoolConfirmObj = (data, CONFIRM_SIGN_UP_OBJ) => {

    let {firstName, email, lastName, sub, userName} = userData

    CONFIRM_SIGN_UP_OBJ.ConfirmationCode = data.get('confirmCode')
    CONFIRM_SIGN_UP_OBJ.Username = userName
    CONFIRM_SIGN_UP_OBJ.email = email
    CONFIRM_SIGN_UP_OBJ.sub = sub

    return CONFIRM_SIGN_UP_OBJ
  }


  return (
      isClient && <main className={styles.main}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component="h3" variant="h5"> Check Your Email</Typography>
          
          <Box component="form" 
            onSubmit={handleSubmit}
            noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
            //   required
              fullWidth
              name="confirmCode"
              label="Enter your code"
              type="confirmCode"
              id="confirmCode"
              autoComplete="confirmCode"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Container>
      </main>
  );
}
