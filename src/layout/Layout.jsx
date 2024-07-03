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

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu open={menuOpen} onClose={handleMenuClose} />
      <Container component="main" sx={{ flex: 1, py: 3 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ p: 2, backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 My Website. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
