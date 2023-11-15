import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import React, { useState, useEffect} from 'react';
import Link from 'next/link';

export default function AppDrawer() {
  const [state, setState] = useState({left: false})
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const menuItems = [
    {page:"Home", route:'/dashboard'}
  ]

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <Link href={item.route}>
                <ListItemText primary={item.page} />
              </Link>
              {/* <ListItemIcon>
                {index % 2 === 0 ? "I" : "M" }
              </ListItemIcon> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
     <div>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{color:'white'}} onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>

  );
}