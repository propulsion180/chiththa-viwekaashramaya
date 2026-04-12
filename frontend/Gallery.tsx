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
        <div className="masonry-item">
          <img src="/static/000003.JPG" alt="cat" />
        </div>
        <div className="masonry-item">
          <img src="/static/000004.JPG" alt="dusk sky" />
        </div>

        <div className="masonry-item">
          <img src="/static/000005.JPG" alt="Buddhist temple altar" />
        </div>

        <div className="masonry-item">
          <img src="/static/000006.JPG" alt="Temple bedroom" />
        </div>
        <div className="masonry-item">
          <img src="/static/000009.JPG" alt="Buddhist temple altar" />
        </div>

        <div className="masonry-item">
          <img src="/static/000010.JPG" alt="Temple bedroom" />
        </div>
      </div>
    </div>
  );
}
