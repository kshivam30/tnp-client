import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import Layout from "../layout/Layout";
import axios from "axios";

const JobDetails = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const backendServer = process.env.REACT_APP_BACKEND_SERVER;

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${backendServer}/getJobs`);
      setJobs(response.data);
      if (response.data.length > 0) {
        setSelectedJob(response.data[0]); // Set the first job as the default selected job
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching job data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobChange = (event) => {
    const jobId = event.target.value;
    const job = jobs.find((job) => job._id === jobId);
    setSelectedJob(job);
  };

  const handleDownload = async () => {
    if (!selectedJob || !selectedJob.userApplied) return;
  
    try {
      // Assuming `selectedJob.userApplied` contains user emails
      const userEmails = selectedJob.userApplied;
  
      // Create an array of promises for fetching user details
      const userDetailsPromises = userEmails.map((userEmail) =>
        axios.post(`${backendServer}/getUser`, { email: userEmail })
      );
  
      // Wait for all promises to resolve
      const userDetailsResponses = await Promise.all(userDetailsPromises);
  
      // Extract user data from responses
      const userDetails = userDetailsResponses.map((response) => response.data);
  
      console.log("User Details:", userDetails); // Log user details
  
      // Create CSV content
      const csvContent = [
        ["Name", "Email", "Registration Number"], // Add more headers as needed
        ...userDetails.map((user) => [
          user.user.name,
          user.user.email,
          user.user.registrationNumber, // Add more fields as needed
        ]),
      ]
        .map((e) => e.join(","))
        .join("\n");
  
      console.log("CSV Content:", csvContent); // Log CSV content
  
      // Create and download the CSV file
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `${selectedJob.companyName}_applicants.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };
  
  

  return (
    <Layout>
      <Box sx={{ my: 4 }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <FormControl fullWidth>
              <InputLabel id="select-job-label">Select Job</InputLabel>
              <Select
                labelId="select-job-label"
                value={selectedJob ? selectedJob._id : ""}
                onChange={handleJobChange}
              >
                {jobs.map((job) => (
                  <MenuItem key={job._id} value={job._id}>
                    {`${job.companyName} - ${job.jobTitle}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {selectedJob && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                  {selectedJob.jobTitle}
                </Typography>
                <Typography variant="h6">{selectedJob.companyName}</Typography>
                <Typography variant="body1">CTC: {selectedJob.CTC}</Typography>
                <Typography variant="body1">
                  Date of Application: {new Date(selectedJob.DOA).toLocaleDateString()}
                </Typography>
                <Typography variant="body1">
                  Eligible Above: {selectedJob.eligibleAbove}
                </Typography>
                <Typography variant="body1">Job Type: {selectedJob.jobType}</Typography>

                <Box sx={{ my: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Users Applied
                  </Typography>
                  <Button
                    onClick={handleDownload}
                    sx={{ mt: 2 }}
                    variant="contained"
                    color="primary"
                  >
                    Download List
                  </Button>
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
    </Layout>
  );
};

export default JobDetails;
