import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Calendar() {
  return (
    <div className="fill-parent">
      <h2>Events</h2>
      <br />
      <div className="location-map-div">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Pacific%2FAuckland&title=Chiththa%20Viwekaashramaya%20Demo&src=ZW4ubmV3X3plYWxhbmQjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23009688"
          style={{ border: 0 }}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
