"use client"
import React, { useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppDrawer from './Appdrawer';
import Link from 'next/link';

const menuItems = [
  {page:"Home", route:'/'},
  {page:"About", route:'/about'},
  // {page:"Contact", route:'/contact'},
]

export default function NavBar({pos}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onClickLogin = event =>{
    setIsLoggedIn(true)
  }

  const renderLogin = () =>{
    return(
      <React.Fragment>
        {menuItems.map((item,i) =>(
          <Button key={i} color="inherit">
          <Link href={item.route}>{item.page}</Link>
        </Button>
        ))}
        <Button onClick={onClickLogin} color="inherit">
          <Link href="/login"> Login </Link>
        </Button>
      </React.Fragment>

    )
  }

  const onClickLogout = event =>{
    setIsLoggedIn(false)
  }

  const renderLogout = () =>{
    return(
      <Button onClick={onClickLogout} color="inherit">
        <Link href="/"> Log Out </Link>
      </Button>

    )
  }

  return (
      <AppBar position="fixed">
        <Toolbar>

          {isLoggedIn && < AppDrawer />}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          {!isLoggedIn ? renderLogin() : renderLogout()}
        
        </Toolbar>
      </AppBar>
  );
}
