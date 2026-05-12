import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Dana() {
  return (
    <div className="text-div">
      <h2>Dana Roster</h2>
      <p>
        If you would like to reserve a date to provide Dane (a meal for the
        monk) for the monk please contact:
      </p>
      <p>
        <strong>Azhani</strong>
        <br />
        <strong>Phone No:</strong> 0221316453
      </p>
      <br />
      <h2>Pirikara</h2>
      <p>
        The following is a list of things needed for the temple. They are
        ordered by urgency
      </p>
      <ol>
        <li>Tissues</li>
        <li>Nestomalt</li>
        <li>Tea bags</li>
      </ol>
    </div>
  );
}
