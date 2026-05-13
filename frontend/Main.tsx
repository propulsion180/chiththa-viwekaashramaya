import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="fill-parent">
      <div className="main-page-image-container">
        <img
          className="main-page-image"
          src="/static/samadhi.jpg"
          alt="Main Page Temple image"
        />
      </div>
      <div className="main-text">
        <h2>Welcome to Chiththa Viwekaashramaya</h2>
        <br />
        <p>
          Chiththa Viwekaashramaya is a Theravāda Buddhist temple based in Lower
          Hutt, Wellington, established to preserve, practise, and share the
          teachings of the Buddha within New Zealand.
        </p>
        <br />
        <p>
          Rooted in the teachings of the Buddha, our temple serves as a
          spiritual home for the Sri Lankan Buddhist community in New Zealand,
          while warmly welcoming people of all backgrounds who wish to learn and
          connect through kindness, compassion, and the Dhamma.
        </p>
        <br />
        <p>
          At Chiththa Viwekaashramaya, we believe in fostering a sense of
          community, generosity, and harmony. Through religious observances,
          offering dana to the Maha Sangha, Dhamma discussions, community
          gatherings, and cultural events, we strive to preserve and share rich
          Buddhist traditions and values for future generations.
        </p>
        <br />
        <p>
          The temple warmly welcomes all who wish to pay homage to the Triple
          Gem and take part in the practice and preservation of the Buddha
          Sasana.
        </p>
        <br />
        <p>
          <strong>
            May the blessings of the Triple Gem be with you always.
          </strong>
        </p>
      </div>
    </div>
  );
}
