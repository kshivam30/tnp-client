// src/components/Layout.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Menu from './Menu';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: menuOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
          ml: menuOpen ? `${drawerWidth}px` : 0,
          transition: 'width 0.3s',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu open={menuOpen} onClose={handleMenuClose} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: menuOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
          transition: 'width 0.3s',
          ml: menuOpen ? `${drawerWidth}px` : 0,
        }}
      >
        <Toolbar />
        {children}
      </Box>
      <Box component="footer" sx={{ p: 2, backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 My Website. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
