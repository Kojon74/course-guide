import React from "react";
import { Link } from "react-router-dom";

const SpecializationCard = ({ specialization }) => {
  return (
    <Link
      className="specialization-card"
      to={{
        pathname: `/degree/${specialization}`,
        state: { name: "Jack" },
      }}
    >
      <p className="specialization-name">{specialization}</p>
    </Link>
  );
};

export default SpecializationCard;
