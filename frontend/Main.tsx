import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-page-image-container">
        <img
          className="main-page-image"
          src="/static/temple-main-page.jpg"
          alt="Main Page Temple image"
        />
      </div>
    </div>
  );
}
