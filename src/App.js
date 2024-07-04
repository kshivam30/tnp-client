import React, { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'; 
import JobsPage from "./pages/JobsPage";
import HelpPage from "./pages/HelpPage";
import AdminPage from "./pages/AdminPage";
import AddJobPage from "./pages/AddJobPage";
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Example primary color
    },
    secondary: {
      main: '#f50057', // Example secondary color
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/addjob" element={<AddJobPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
