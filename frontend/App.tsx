import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import {
  useNavigate,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Donate from "./Donate";
import News from "./News";
import Location from "./Location";
import Gallery from "./Gallery";

const App: React.FC = () => {
  console.log("starting");
  const host = window.location.host;

  return (
    <div className="center">
      <Router>
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
