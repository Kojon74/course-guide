import React, { useEffect, useState } from "react";
import { Ellipse } from "react-ionicons";
import { useLocation, useParams } from "react-router-dom";

import CourseList from "./CourseList";
import "./styles/degreebuilder.css";

function DegreeBuilder() {
  let { specialization } = useParams();
  const specialization_dict = {
    FRST: "First Year Engineering",
    BMEG: "Biomedical Engineering",
    CHML: "Chemical Engineering",
    CHBE: "Chemical and Biological Engineering",
    CIVL: "Civil Engineering",
    CPEN: "Computer Engineering",
    ELEC: "Electrical Engineering",
    ENPH: "Engineering Physics",
    ENVE: "Environmental Engineering",
    GEOE: "Geological Engineering",
    IGEN: "Integrated Engineering",
    MANU: "Manufacturing Engineering",
    MECH: "Mechanical Engineering",
    MINE: "Mining Engineering",
  };

  const firstYearCourses = [
    {title: "PHYS 157 - Introductory Physics For Engineers I", credits: 3} ,
    {title: "PHYS 158 - Introductory Physics For Engineers II", credits: 3} ,
    {title: "APSC 101 - Introduction to Engineering II", credits: 3} ,
  ];
  const secondYearCourses = [
    {title: "CPEN 211 - Introduction to Microcomputers", credits: 3},
    {title: "CPEN 221 - Principles of Software Construction", credits: 3},
    {title: "CPSC 261 - Basics of Computer Systems", credits: 3},
    {title: "CPSC 221 - Basic Algorithms and Data Structures", credits: 3},
    {title: "ELEC 201 - Circuit Analysis I", credits: 3},
    {title: "CPEN 291 - Computer Engineering Design Studio I", credits: 3},
    {title: "MATH 220 - Mathematical Proof", credits: 3},
    {title: "MATH 253 - Multivariable Calculus", credits: 3},
    {title: "MATH 256 - Differential Equations", credits: 3},
  ];
  const thirdYearCourses = [
    {title: "CPEN 331 - Operating Systems", credits: 3}, 
    {title: "ELEC 221 - Signals and Systems", credits: 3}, 
    {title: "CPEN 311 - Digital Systems Design", credits: 3}, 
    {title: "CPEN 391 - Computer Engineering Design Studio II", credits: 3}, 
  ];
  const fourthYearCourses = [
    {title: "CPEN 481 - Economic Analysis of Engineering Projects", credits: 3},
    {title: "CPEN 491 - Computer Engineering Capstone Design Project", credits: 3},
  ];
  const technicalElectives = {
    id: 1,
    sectionTitle: "Technical Electives",  
    creditLimit: [6, 9, 12], // for second year, third year, fourth year
    courses: [
                {title: "CPSC 320 - Intermediate Algorithm Design and Analysis", credits: 3},
                {title: "CPSC 340 - Machine Learning and Data Mining", credits: 3},
                {title: "CPSC 304 - Introduction to Relational Databases", credits: 3},
             ]
  };

  const complementaryElectives = {
    id: 2,
    sectionTitle: "Complementary Electives",
    creditLimit: [3, 6, 12],
    courses: [
              {title: "ECON 100 - Principles of Microeconomics", credits: 3},
              {title: "APSC 450 - Professional Engineering Practice", credits: 3},
             ]
  };

  const electives = [technicalElectives, complementaryElectives];

  const [techLimit, setTechLimit] = useState(3);
  const [compLimit, setCompLimit] = useState(3);

  const [selElectives, setSelElectives] = useState([]);

  const [selCourses2, setSelCourses2] = useState([]);
  const [selCourses3, setSelCourses3] = useState([]);
  const [selCourses4, setSelCourses4] = useState([]);

  const summary = [
    {
      title: "2nd Year",
      courses: selCourses2,
    },
    {
      title: "3rd Year",
      courses: selCourses3,
    },
    {
      title: "4th Year",
      courses: selCourses4,
    },
  ];

  const [resetSearch, setResetSearch] = useState(false);
  const [searchId, setSearchId] = useState(0);

  return (
    <main>
      <div className="course-selection">
        <h1 className="page-header">{specialization}</h1>
        <CourseList
          id={200}
          title="2nd Year"
          courses={secondYearCourses}
          selCourses={[selCourses2, setSelCourses2]}
          selElectives={[selElectives, setSelElectives]}
          electives={electives}
          resetSearch={[resetSearch, setResetSearch]}
          searchId={[searchId, setSearchId]}
        />
        <CourseList
          id={300}
          title="3rd Year"
          courses={thirdYearCourses}
          selCourses={[selCourses3, setSelCourses3]}
          selElectives={[selElectives, setSelElectives]}
          electives={electives}
          resetSearch={[resetSearch, setResetSearch]}
          searchId={[searchId, setSearchId]}
        />
        <CourseList
          id={400}
          title="4th Year"
          courses={fourthYearCourses}
          selCourses={[selCourses4, setSelCourses4]}
          selElectives={[selElectives, setSelElectives]}
          electives={electives}
          resetSearch={[resetSearch, setResetSearch]}
          searchId={[searchId, setSearchId]}
        />
      </div>
    </main>
  );
}


export default DegreeBuilder;
