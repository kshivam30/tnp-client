import React, { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'; 
import JobsPage from "./pages/JobsPage";

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
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Routes>
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
