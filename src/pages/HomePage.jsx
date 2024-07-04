import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles'; 
import Layout from '../layout/Layout';
import { useSelector } from 'react-redux';
import { Dashboard } from '@mui/icons-material';
import DashboardComponent from '../components/DashBoardComponent';

const StatCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const HomePage = () => {
  const role = useSelector((state) => state.role);

  const profile = {
    name: "John Doe",
    avatarUrl: "https://via.placeholder.com/150",
    description: "Software Engineer",
  };

  const stats = [
    { label: "Jobs Applied", value: 50 },
    { label: "Placed", value: 10 },
    { label: "Rejections", value: 30 },
    { label: "Waiting", value: 10 },
  ];

  return (
    <Layout>
      <DashboardComponent/>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {role === 'Admin' ? (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" component="div" gutterBottom>
                Admin Dashboard
              </Typography>
              <Typography variant="body1">
                Welcome, {profile.name}. Here you can manage the system.
              </Typography>
            </Grid>
            {/* Add more admin-specific components here */}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center', padding: 3 }}>
                <Avatar
                  alt={profile.name}
                  src={profile.avatarUrl}
                  sx={{ width: 100, height: 100, margin: 'auto' }}
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {profile.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <StatCard>
                      <Typography variant="h4" component="div" gutterBottom>
                        {stat.value}
                      </Typography>
                      <Typography variant="body1">
                        {stat.label}
                      </Typography>
                    </StatCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Box>
    </Layout>
  );
};

export default HomePage;


