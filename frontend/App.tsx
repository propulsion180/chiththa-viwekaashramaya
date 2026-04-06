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

const App: React.FC = () => {
  console.log("starting");
  const host = window.location.host;

  return (
    <div className="center">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
