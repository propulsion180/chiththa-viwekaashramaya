import React, { useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobile-header">
      <div className="mobile-header-top">
        <h1>Chiththa Viwekaashramaya</h1>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <hr className="hr-solid" />

      {menuOpen && (
        <div className="mobile-header-nav">
          <a
            className="mobile-header-nav-button"
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            className="mobile-header-nav-button"
            onClick={() => {
              navigate("/location");
              setMenuOpen(false);
            }}
          >
            Location
          </a>
          <a
            className="mobile-header-nav-button"
            onClick={() => {
              navigate("/donate");
              setMenuOpen(false);
            }}
          >
            Donate
          </a>
          <a
            className="mobile-header-nav-button"
            onClick={() => {
              navigate("/news");
              setMenuOpen(false);
            }}
          >
            News
          </a>

          <hr className="hr-solid-m" />
        </div>
      )}
    </div>
  );
}
