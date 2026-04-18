import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Donate() {
  return (
    <div className="text-div">
      <h3>
        Thanks for deciding to donate to Chithatha Viwekaashramaya. Your
        donation will go towards, rent, bills, and the monk's necessities.
      </h3>
      <p>
        An <strong>interim bank account</strong> has been set up by{" "}
        <strong>Ranjith Nanayakkara</strong> as a separate account, until the
        temple’s official bank account is opened.
      </p>
      <p>
        <strong>Account Name:</strong> Ranjith Yapa Nanayakkara
        <br />
        <strong>Account No:</strong> 02-0528-0097381-005
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
    </div>
  );
}
