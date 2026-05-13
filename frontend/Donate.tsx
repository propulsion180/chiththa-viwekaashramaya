import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Donate() {
  return (
    <div className="text-div fill-parent">
      <h2>Donate</h2>
      <p>
        Thank you for choosing to support Chiththa Viwekaashramaya. Your
        generosity and kindness help support the continued growth of the temple
        and the wellbeing of the Maha Sangha.
      </p>
      <p>
        Donations will go towards the temple’s ongoing expenses, including rent,
        utilities, maintenance, and the daily necessities of the monk.
      </p>
      <p>
        <strong>Account Name:</strong> Chiththa Viwekaashramaya Trust
        <br />
        <strong>Account No:</strong> 02-0506-0397121-000
        <br />
        <br />
        When transfering, please use your:
        <br />
        <ul>
          <li>
            <strong>First Name </strong> in the Particulars field
          </li>

          <li>
            <strong>Last Name </strong> in the Code field
          </li>
        </ul>
      </p>
      <br />
      <p>For queries please contact:</p>
      <p>
        Deepa Keenawinna (Treasurer) - <strong>021 074 8526</strong>
      </p>
      <br />
      <p>
        Thushara Sanjeewa (President) - <strong>021 024 61516</strong>
      </p>
      <p>
        <strong>
          We sincerely thank you for your generosity, support, and blessings.
        </strong>
      </p>
      <div className="donate-page-image-container">
        <img
          className="donate-qr"
          src="/static/qrcode_chiththa.svg"
          alt="Banking information to Donate to Chiththa Viwekaashramaya."
        />
      </div>
    </div>
  );
}
