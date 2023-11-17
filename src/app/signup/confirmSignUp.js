"use client"
import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import styles from '../page.module.css'

export default function ConfirmSignUp() {
    const [isClient, setIsClient] = useState(false)

    useEffect(()=>{
        setIsClient(true)
    })

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    
    console.log({
      cofirmCode: data.get('confirmCode'),
      password: data.get('password'),
    });
  };

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
