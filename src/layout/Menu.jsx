// src/components/layout/Menu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import LogoutIcon from '@mui/icons-material/Logout';
const Menu = ({ open, onClose }) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem component={Link} to="/" onClick={onClose} button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/jobs" onClick={onClose} button>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItem>
        <ListItem component={Link} to="/login" onClick={onClose} button>
          <ListItemIcon><LogoutIcon/></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        {/* Add more menu items as needed */}
      </List>
    </Drawer>
  );
};

export default Menu;
