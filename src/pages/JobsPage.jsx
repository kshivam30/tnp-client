import React, { useState } from 'react';
import { Button, Grid, Container, Box, Typography } from '@mui/material';
import JobCard from '../components/JobCard'; // Adjust the path based on your project structure
import Layout from '../layout/Layout';

const mockJobsData = [
  {
    companyName: "Example Company",
    CTC: "10 LPA",
    DOA: "2024-07-06",
    eligibleAbove: "7 CGPA",
    Applied: true,
    logo: "https://example.com/logo.png",
    jobTitle: "Software Dev",
    jobType: "Full-Time"
  },
  {
    companyName: "Example Company",
    CTC: "10 LPA",
    DOA: "2024-07-06",
    eligibleAbove: "7 CGPA",
    Applied: true,
    logo: "https://example.com/logo.png",
    jobTitle: "Software Dev",
    jobType: "Full-Time"
  },
  {
    companyName: "Example Company",
    CTC: "10 LPA",
    DOA: "2024-07-06",
    eligibleAbove: "7 CGPA",
    Applied: true,
    logo: "https://example.com/logo.png",
    jobTitle: "Software Dev",
    jobType: "Full-Time"
  },
];

const JobsPage = () => {
  const [showApplied, setShowApplied] = useState(false);

  const handleShowAll = () => {
    setShowApplied(false);
  };

  const handleShowApplied = () => {
    setShowApplied(true);
  };

  const filteredJobs = showApplied
    ? mockJobsData.filter(job => job.Applied)
    : mockJobsData;

  return (
    <Layout>
      <Container>
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
      </Container>
    </Layout>
  );
};

export default JobsPage;
