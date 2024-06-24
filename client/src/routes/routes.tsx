import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "../pages/Homepage";
import LandingPage from "../pages/LandingPage";
// import Contact from "./components/Contact";
// import NotFound from "./components/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
