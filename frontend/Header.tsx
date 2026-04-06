import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1>Chiththa Viwekaashramaya</h1>
      <div className="navButtonContainer">
        <a
          className="nav-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </a>
        <a
          className="nav-button"
          onClick={() => {
            navigate("/donate");
          }}
        >
          Donate
        </a>
        <a
          className="nav-button"
          onClick={() => {
            navigate("/news");
          }}
        >
          News
        </a>
      </div>
      <hr className="hr-solid" />
    </div>
  );
}
