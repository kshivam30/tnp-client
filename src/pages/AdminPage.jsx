// AdminPage.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Layout from '../layout/Layout';

const AdminPage = () => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    role: '',
    salary: '',
    roundDate: '',
    applied: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Logic to add the job to the students' jobs section
    console.log('Job added:', jobDetails);
    // You can add API call here to save the job details to your database

    // Reset the form after submission
    setJobDetails({
      jobTitle: '',
      companyName: '',
      location: '',
      jobType: '',
      role: '',
      salary: '',
      roundDate: '',
      applied: false,
    });
  };

  return (
    <Layout>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Add New Job
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}
        >
          <TextField
            label="Job Title"
            variant="outlined"
            name="jobTitle"
            value={jobDetails.jobTitle}
            onChange={handleChange}
          />
          <TextField
            label="Company Name"
            variant="outlined"
            name="companyName"
            value={jobDetails.companyName}
            onChange={handleChange}
          />
          <TextField
            label="Location"
            variant="outlined"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
          />
          <TextField
            label="Job Type"
            variant="outlined"
            name="jobType"
            value={jobDetails.jobType}
            onChange={handleChange}
          />
          <TextField
            label="Role"
            variant="outlined"
            name="role"
            value={jobDetails.role}
            onChange={handleChange}
          />
          <TextField
            label="Salary"
            variant="outlined"
            name="salary"
            value={jobDetails.salary}
            onChange={handleChange}
          />
          <TextField
            label="Round Date"
            variant="outlined"
            name="roundDate"
            value={jobDetails.roundDate}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Job
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default AdminPage;
