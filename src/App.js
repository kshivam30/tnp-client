import React, { useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
