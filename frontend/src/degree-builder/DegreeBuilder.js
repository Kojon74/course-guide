import React, {useState} from 'react';

import CourseList from './CourseList'
import DegreeSummary from './DegreeSummary';
import './styles/degreebuilder.css';

function DegreeBuilder({specialization}){
    
    const firstYearCourses = ['PHYS 157 - Introductory Physics For Engineers I', 'PHYS 158 - Introductory Physics For Engineers II', 'APSC 101 - Introduction to Engineering II'];
    const secondYearCourses = ['CPEN 211 - Introduction to Microcomputers', 'CPEN 221 - Principles of Software Construction', 'CPSC 261 - Basics of Computer Systems', 'CPSC 221 - Basic Algorithms and Data Structures',
                                'ELEC 201 - Circuit Analysis I', 'CPEN 291 - Computer Engineering Design Studio I', 'MATH 220 - Mathematical Proof', 'MATH 253 - Multivariable Calculus', 'MATH 256 - Differential Equations'];
    const thirdYearCourses = ['CPEN 331 - Operating Systems', 'ELEC 221 - Signals and Systems', 'CPEN 311 - Digital Systems Design', 'CPEN 391 - Computer Engineering Design Studio II'];
    const fourthYearCourses = ['CPEN 481 - Economic Analysis of Engineering Projects', 'CPEN 491 - Computer Engineering Capstone Design Project']

    const [techLimit, setTechLimit] = useState(3);
    const [compLimit, setCompLimit] = useState(3);
    
    const [selElectives, setSelElectives] = useState([]);

    const [selCourses1 ,setSelCourses1] = useState([...firstYearCourses]);
    const [selCourses2 ,setSelCourses2] = useState([...secondYearCourses]);
    const [selCourses3 ,setSelCourses3] = useState([...thirdYearCourses]);
    const [selCourses4 ,setSelCourses4] = useState([...fourthYearCourses]);
    
    const dropDowns = [
                        {
                            title: "Technical Electives", 
                            limit: techLimit,
                            updateLimit: setTechLimit,
                            courses: ["CPSC 320 - Intermediate Algorithm Design and Analysis", "CPSC 340 - Machine Learning and Data Mining", "CPSC 304 - Introduction to Relational Databases", "ELEC 202 - Electric Circuits II",
                                       ],
                        },
                        {
                            title: "Complementary Electives", 
                            limit: compLimit,
                            updateLimit: setCompLimit,
                            courses: ["ECON 100 - Principles of Microeconomics", "APSC 450 - Professional Engineering Practice"],
                        }
                    ];
    const summary = [
                        {
                            title: "1st Year", 
                            courses: selCourses1
                        },
                        {
                            title: "2nd Year", 
                            courses: selCourses2
                        },
                        {
                            title: "3rd Year", 
                            courses: selCourses3
                        },
                        {
                            title: "4th Year", 
                            courses: selCourses4
                        }

                    ];
    
    return(
        <main>
            <div className="course-selection">
                <h1>{specialization} Engineering</h1>
                <CourseList title="1st Year" courses={firstYearCourses} selectedCourses={[selCourses1, setSelCourses1]} />
                <CourseList title="2nd Year" courses={secondYearCourses} dropDowns={dropDowns} selCourses={[selCourses2, setSelCourses2]} selElectives={[selElectives, setSelElectives]} />
                <CourseList title="3rd Year" courses={thirdYearCourses} dropDowns={dropDowns}  selCourses={[selCourses3, setSelCourses3]} selElectives={[selElectives, setSelElectives]} />
                <CourseList title="4th Year" courses={fourthYearCourses} dropDowns={dropDowns}  selCourses={[selCourses4, setSelCourses4]} selElectives={[selElectives, setSelElectives]} />
            </div>
            <DegreeSummary summary={summary} electives={selElectives}/> 
        </main>
    )
}

export default DegreeBuilder;