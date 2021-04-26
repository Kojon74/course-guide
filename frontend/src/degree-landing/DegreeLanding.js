import React from "react";
import SpecializationCard from "./SpecializationCard";
import "./style.css";

const DegreeLanding = () => {
  const specializations = [
    "First Year Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Chemical and Biological Engineering",
    "Civil Engineering",
    "Computer Engineering",
    "Electrical Engineering",
    "Engineering Physics",
    "Environmental Engineering",
    "Geological Engineering",
    "Integrated Engineering",
    "Manufacturing Engineering",
    "Mechanical Engineering",
    "Mining Engineering",
  ];

  return (
    <>
      <h2 className="page-header">Degree Builder</h2>
      <div style={{ width: "70%", margin: "auto" }}>
        <div className="specialization-grid">
          {specializations.map((specialization) => (
            <SpecializationCard specialization={specialization} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DegreeLanding;
