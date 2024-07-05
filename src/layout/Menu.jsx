// src/components/layout/Menu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../state';
const Menu = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((store) => store.role);
  const handleLogout = () => {
    dispatch(resetUser());
    onClose();
    navigate('/login');
  };
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
        <ListItem component={Link} to="/" onClick={onClose}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/jobs" onClick={onClose}>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItem>
        { role==="Student" && (<ListItem component={Link} to="/help" onClick={onClose}>
          <ListItemIcon><HelpIcon/></ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>)}
       { role==="Admin" && (<ListItem component={Link} to="/addjob" onClick={onClose}>
          <ListItemIcon><WorkIcon/></ListItemIcon>
          <ListItemText primary="Add Job" />
        </ListItem>)}
        <ListItem component={Link} to="/login" onClick={handleLogout}>
          <ListItemIcon><LogoutIcon/></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
