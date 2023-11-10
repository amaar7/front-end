// src/components/DogCard.js
import React from "react";
import { Link } from "react-router-dom";

const DogCard = ({ dog }) => (
  <Link to={`/${dog.name}`} key={dog.id} className="dog-card">
    <article>
      <img
        src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
        alt={dog.name}
        loading="lazy"
      />
      <h3 className="text-white text-lg font-bold mt-4">{dog.name}</h3>
      <p className="text-slate-400">Bred For: {dog.bred_for}</p>
    </article>
  </Link>
);

export default DogCard;



