import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CatalogManagement from "./components/CatalogManagement";

function App() {
  return (
    <Router>
      <Routes>
        {/* Directly load the dashboard or catalog management */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/catalog" element={<CatalogManagement />} />
        {/* 404 fallback */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
