import React, { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
