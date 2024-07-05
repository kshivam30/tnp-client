import React from 'react';
import { Avatar, Box, Typography, Paper, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const DashboardComponent = ({ user }) => {
  const userImage = user.avatarUrl || 'https://via.placeholder.com/150'; // Use user's avatar or fallback to placeholder

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <Box sx={{ position: 'relative', mb: 2 }}>
        <Box
          component="img"
          sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 2 }}
          src="https://via.placeholder.com/1500x400" // Replace with your actual banner image source
          alt="Banner"
        />
        <Avatar
          sx={{
            width: 80,
            height: 80,
            position: 'absolute',
            bottom: -40,
            left: 16,
            border: '3px solid white',
          }}
          src={userImage}
        >
          {!user.avatarUrl && <PersonIcon sx={{ fontSize: 40 }} />} {/* Display icon if no image */}
        </Avatar>
      </Box>
      <Box sx={{ padding: 2, mt: 4 }}>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" color="textSecondary">{user.email}</Typography>
        <Typography variant="body2" color="textSecondary">
          Registration Number: {user.registrationNumber} 
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          {/* Example Chip - Replace with actual user data */}
          <Chip label="Beginner" color="success" />
          <Typography variant="body2">Level 1 of 5</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default DashboardComponent;
