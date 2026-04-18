import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Calendar() {
  return (
    <div className="fill-parent">
      <h2>Events</h2>
      <br />
      <div className="location-map-div">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.100960026849!2d174.9563662776228!3d-41.197772434916416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d47556cfa84f1bb%3A0x8ceec4a581b15878!2s34%20Harris%20Street%2C%20Naenae%2C%20Lower%20Hutt%205011!5e0!3m2!1sen!2snz!4v1775548111943!5m2!1sen!2snz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
