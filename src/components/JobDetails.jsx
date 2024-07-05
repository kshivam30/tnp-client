// import React from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Box,
//   Button,
// } from "@mui/material";
// import Layout from "../layout/Layout";

// const JobDetails = () => {
//   const location = useLocation();
//   const {
//     companyName,
//     CTC,
//     DOA,
//     eligibleAbove,
//     logo,
//     jobTitle,
//     jobType,
//     userApplied,
//   } = location.state || {};

//   console.log(location.state); // Debugging line to check the passed state

//   const handleDownload = () => {
//     // const csvContent =
//     //   "data:text/csv;charset=utf-8," + userApplied.join("\n");
//     // const encodedUri = encodeURI(csvContent);
//     // const link = document.createElement("a");
//     // link.setAttribute("href", encodedUri);
//     // link.setAttribute("download", `${companyName}_applicants.csv`);
//     // document.body.appendChild(link);
//     // link.click();
//   };

//   return (
//     <Layout>
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           {jobTitle}
//         </Typography>
//         <Typography variant="h6">{companyName}</Typography>
//         <Typography variant="body1">CTC: {CTC}</Typography>
//         <Typography variant="body1">
//           Date of Application: {new Date(DOA).toLocaleDateString()}
//         </Typography>
//         <Typography variant="body1">
//           Eligible Above: {eligibleAbove}
//         </Typography>
//         <Typography variant="body1">Job Type: {jobType}</Typography>
//       </Box>
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Users Applied
//         </Typography>
//         <Button
//           onClick={handleDownload}
//           sx={{ mt: 2 }}
//           variant="contained"
//           color="primary"
//         >
//           Download List
//         </Button>
//       </Box>
//     </Layout>
//   );
// };

// export default JobDetails;

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

  const handleDownload = () => {
    // Implement the CSV download logic here if needed
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
