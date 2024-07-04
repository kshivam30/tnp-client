import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';

const AddJobPage = ({ addJob }) => {
  const [newJob, setNewJob] = useState({
    companyName: '',
    CTC: '',
    DOA: '',
    eligibleAbove: '',
    Applied: false,
    logo: '',
    jobTitle: '',
    jobType: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value
    });
  };

  const handleSubmit = () => {
    addJob(newJob);
    navigate('/admin');
  };

  return (
    <Layout>
      <Container>
      <Typography variant="h4" gutterBottom>Add New Job</Typography>
      <Card>
        <CardContent>
          <TextField
            name="companyName"
            label="Company Name"
            value={newJob.companyName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="CTC"
            label="CTC"
            value={newJob.CTC}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="DOA"
            label="DOA"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={newJob.DOA}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="eligibleAbove"
            label="Eligible Above"
            value={newJob.eligibleAbove}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="logo"
            label="Logo URL"
            value={newJob.logo}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="jobTitle"
            label="Job Title"
            value={newJob.jobTitle}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="jobType"
            label="Job Type"
            value={newJob.jobType}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Job
          </Button>
        </CardContent>
      </Card>
    </Container>
    </Layout>
  );
};

export default AddJobPage;
