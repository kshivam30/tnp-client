import React, { useState } from 'react';
import { Container, Typography, Grid, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import JobCard from '../components/JobCard'; // Import the JobCard component
import Layout from '../layout/Layout';

const initialJobs = [
  {
    companyName: "Example Company",
    CTC: "10 LPA",
    DOA: "2024-07-06",
    eligibleAbove: "7 CGPA",
    Applied: true,
    logo: "",
    jobTitle: "Software Dev",
    jobType: "Full-Time"
  },
  {
    companyName: "Example Company",
    CTC: "10 LPA",
    DOA: "2024-07-06",
    eligibleAbove: "7 CGPA",
    Applied: true,
    logo: "",
    jobTitle: "Software Dev",
    jobType: "Full-Time"
  },
  {
    companyName: "Example Company",
    CTC: "10 LPA",
    DOA: "2024-07-06",
    eligibleAbove: "7 CGPA",
    Applied: true,
    logo: "",
    jobTitle: "Software Dev",
    jobType: "Full-Time"
  },
  {
    companyName: "Example Company",
    CTC: "10 LPA",
    DOA: "2024-07-06",
    eligibleAbove: "7 CGPA",
    Applied: true,
    logo: "",
    jobTitle: "Software Dev",
    jobType: "Full-Time"
  },
  {
    companyName: "Example Company",
    CTC: "10 LPA",
    DOA: "2024-07-06",
    eligibleAbove: "7 CGPA",
    Applied: true,
    logo: "",
    jobTitle: "Software Dev",
    jobType: "Full-Time"
  }
];

const AdminPage = () => {
  const [jobs, setJobs] = useState(initialJobs);

  const removeJob = (index) => {
    const updatedJobs = jobs.filter((job, i) => i !== index);
    setJobs(updatedJobs);
  };

  return (
    <Layout>
      <Container>
        <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            component={Link}
            to="/addjob"
          >
            Add Job
          </Button>
        </Box>
        <Typography variant="h5" gutterBottom>Job List</Typography>
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard
                companyName={job.companyName}
                CTC={job.CTC}
                DOA={job.DOA}
                eligibleAbove={job.eligibleAbove}
                Applied={job.Applied}
                logo={job.logo}
                jobTitle={job.jobTitle}
                jobType={job.jobType}
                onRemove={() => removeJob(index)} // Pass the onRemove function
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default AdminPage;
