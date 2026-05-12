import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Gallery() {
  return (
    <div className="fill-parent">
      <div className="masonry">
        <div className="masonry-item">
          <img src="/static/temple-main-page.jpg" alt="cat" />
        </div>
        <div className="masonry-item">
          <img src="/static/dusk-sky.jpeg" alt="dusk sky" />
        </div>

        <div className="masonry-item">
          <img src="/static/Altar.jpeg" alt="Buddhist temple altar" />
        </div>

        <div className="masonry-item">
          <img src="/static/bedroom.jpeg" alt="Temple bedroom" />
        </div>
      </div>
    </div>
  );
}
