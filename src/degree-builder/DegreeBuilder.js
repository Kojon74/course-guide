import React, {useState} from 'react';

import CourseList from './CourseList'
import DegreeSummary from './DegreeSummary';
import './styles/degreebuilder.css';

function DegreeBuilder({specialization}){
    
    const firstYearCourses = ['PHYS 157 - Introductory Physics For Engineers I', 'PHYS 158 - Introductory Physics For Engineers II', 'APSC 101 - Introduction to Engineering II'];
    const secondYearCourses = ['CPEN 211 - Introduction to Microcomputers', 'CPEN 221 - Principles of Software Construction', 'CPSC 261 - Basics of Computer Systems'];
    const thirdYearCourses = ['CPEN 331 - Operating Systems', 'ELEC 221 - Signals and Systems', 'CPEN 311 - Digital Systems Design'];

    const [techLimit, setTechLimit] = useState(3);
    const [compLimit, setCompLimit] = useState(3);
    
    const [selDropCourses, setSelDropCourses] = useState([]);

    const [chosenCourses1 ,setChosenCourses1] = useState([]);
    const [chosenCourses2 ,setChosenCourses2] = useState([]);
    const [chosenCourses3 ,setChosenCourses3] = useState([]);
    
    const dropDowns = [
                        {
                            title: "Technical Electives", 
                            limit: techLimit,
                            updateLimit: setTechLimit,
                            courses: ["CPSC 320 - Intermediate Algorithm Design and Analysis", "CPSC 340 - Machine Learning and Data Mining", "CPSC 304 - Introduction to Relational Databases", "ELEC 202 - Electric Circuits II"],    
                        },
                        {
                            title: "Complementary Electives", 
                            limit: compLimit,
                            updateLimit: setCompLimit,
                            courses: ["ECON 100 - Principles of Microeconomics", "APSC 450 - Professional Engineering Practice"],
                        }
                    ];
                    
    
    return(
        <main>
            <h1>{specialization} Engineering</h1>
            <CourseList title="1st Year" courses={firstYearCourses} selectedCourses={[chosenCourses1, setChosenCourses1]} selDropCourses={selDropCourses} setSelDropCourses={setSelDropCourses}/>
            <CourseList title="2nd Year" courses={secondYearCourses} dropDowns={dropDowns} selectedCourses={[chosenCourses2, setChosenCourses2]}  selDropCourses={selDropCourses} setSelDropCourses={setSelDropCourses}/>
            <CourseList title="3rd Year" courses={thirdYearCourses} dropDowns={dropDowns}  selectedCourses={[chosenCourses3, setChosenCourses3]} selDropCourses={selDropCourses} setSelDropCourses={setSelDropCourses}/>
            <DegreeSummary /> 
        </main>
    )
}

export default DegreeBuilder;