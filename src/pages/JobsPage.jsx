import React, { useState, useEffect } from 'react';
import { Button, Grid, Container, Box, Typography } from '@mui/material';
import JobCard from '../components/JobCard'; // Adjust the path based on your project structure
import Layout from '../layout/Layout';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AdminJobCard from '../components/AdminJobCard';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [showApplied, setShowApplied] = useState(false);
  const backendServer = process.env.REACT_APP_BACKEND_SERVER;
  const userEmail = useSelector((state) => state.user.user);
  const role = useSelector((state) => state.user.role);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${backendServer}/getJobs`);
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobs();
  }, [backendServer]);

  const handleShowAll = () => {
    setShowApplied(false);
  };

  const handleShowApplied = () => {
    setShowApplied(true);
  };

  const filteredJobs = showApplied
    ? jobs.filter((job) => job.userApplied.includes(userEmail))
    : jobs;

  return (
    <Layout>
      <Container>
        {role === 'Student' ? (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
              <Button
                variant={showApplied ? 'outlined' : 'contained'}
                onClick={handleShowAll}
                sx={{ marginRight: 1 }}
              >
                All Jobs
              </Button>
              <Button
                variant={showApplied ? 'contained' : 'outlined'}
                onClick={handleShowApplied}
              >
                Applied Jobs
              </Button>
            </Box>
            <Typography variant="h4" gutterBottom>
              {showApplied ? 'Applied Jobs' : 'All Jobs'}
            </Typography>
            <Grid container spacing={3}>
              {filteredJobs.map((job, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <JobCard {...job} />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              All Jobs
            </Typography>
            <Grid container spacing={3}>
              {jobs.map((job, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <AdminJobCard {...job} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default JobsPage;
