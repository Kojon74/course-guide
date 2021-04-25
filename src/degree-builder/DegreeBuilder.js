import React, {useState} from 'react';

import CourseList from './CourseList'
import DegreeSummary from './DegreeSummary';
import './styles/degreebuilder.css';

function DegreeBuilder({specialization}){
    
    const firstYearCourses = ['PHYS 157', 'PHYS 158', 'APSC 101'];
    const secondYearCourses = ['CPEN 211', 'CPEN 221', 'CPSC 261'];
    const thirdYearCourses = ['CPEN 331', 'ELEC 221', 'CPEN 311'];

    const [techLimit, setTechLimit] = useState(2);
    const [compLimit, setCompLimit] = useState(2);

    const [chosenCourses1 ,setChosenCourses1] = useState([...firstYearCourses]);
    const [chosenCourses2 ,setChosenCourses2] = useState([...secondYearCourses]);
    const [chosenCourses3 ,setChosenCourses3] = useState([...thirdYearCourses]);
    
    const dropDowns = [
                        {
                            title: "Technical Electives", 
                            limit: techLimit,
                            updateLimit: setTechLimit,
                            courses: ["CPSC 320", "CPSC 340", "CPSC 304", "ELEC 202"]
                        },
                        {
                            title: "Complementary Electives", 
                            limit: compLimit,
                            updateLimit: setCompLimit,
                            courses: ["ECON 100", "APSC 450"]
                        }
                    ];
                    
    
    return(
        <main>
            <h1>{specialization} Engineering</h1>
            <CourseList title="1st Year" courses={firstYearCourses} chosenCourses={chosenCourses1} updateChosen={setChosenCourses1} />
            <CourseList title="2nd Year" courses={secondYearCourses} dropDowns={dropDowns} chosenCourses={chosenCourses2} updateChosen={setChosenCourses2} />
            <CourseList title="3rd Year" courses={thirdYearCourses} dropDowns={dropDowns} chosenCourses={chosenCourses3} updateChosen={setChosenCourses3} />
            <DegreeSummary /> 
        </main>
    )
}

export default DegreeBuilder;