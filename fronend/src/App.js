import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from "./HomePage.js";
import Services from "./Components/Services/services.js";
import Portfolio from "./Components/Portfolio/portfolio.js";
import Events from "./Components/Events/events.js";
import BudgetCalculator from "./Components/BudgetCalculator/budgetCalculator.js"; // Import BudgetCalculator
import BookUs from "./Components/BookUs/bookus.js"// Import BudgetCalculator
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout/layout.js";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/events" element={<Events />} />
          <Route path="/budget-calculator" element={<BudgetCalculator />} /> {/* New Route for Budget Calculator */}
          <Route path="/book-us" element={<BookUs/>} /> {/* New Route for Budget Calculator */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
