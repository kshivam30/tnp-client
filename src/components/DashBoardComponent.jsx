import React from 'react';
import { Avatar, Box, Typography, Paper, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const DashboardComponent = () => {
  const userImage = 'https://via.placeholder.com/150'; // replace with user avatar source or null if not available

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
      <Box sx={{ position: 'relative', mb: 2 }}>
        <Box
          component="img"
          sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 2 }} // Adjusted height
          src="https://via.placeholder.com/1500x400" // replace with your image source
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
          {!userImage && <PersonIcon sx={{ fontSize: 40 }} />} {/* Display icon if no image */}
        </Avatar>
      </Box>
      <Box sx={{ padding: 2, mt: 4 }}>
        <Typography variant="h6">Kumar Satyam</Typography>
        <Typography variant="body2" color="textSecondary">chirag.kr11@gmail.com</Typography>
        <Typography variant="body2" color="textSecondary">
          Register Number: 20BCE2383 | Batch: 2024 | College: VIT - Placements
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Chip label="Beginner" color="success" />
          <Typography variant="body2">Level 1 of 5</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default DashboardComponent;
