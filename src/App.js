import "./App.css";
import React, { Component } from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Navbar from "./component/navbar/Navbar";
import ComplainReport from "./component/pages/analityc/ComplainReport";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route
            path="/analityc/complaintreport"
            element={<ComplainReport />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
