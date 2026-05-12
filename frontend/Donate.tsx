import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Donate() {
  return (
    <div className="text-div fill-parent">
      <h3>
        Thanks for deciding to donate to Chithatha Viwekaashramaya. Your
        donation will go towards, rent, bills, and the monk's necessities.
      </h3>
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
