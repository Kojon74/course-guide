import React, {useState} from 'react';

import { CaretForwardOutline } from 'react-ionicons';
import { CaretDownOutline } from 'react-ionicons';

function DegreeSummary({summary, electives}){

    return (
        <div className="degree-summary">
            <h2>Summary</h2>
            {
                summary.map((section)=><SummarySection title={section.title} courses={section.courses} electives={electives}/>)
            }
        </div>
    );

}

function SummarySection({title, courses, electives}){


    const [show, setShow] = useState(false);
    const normalCourses = courses.filter((c)=>!electives.includes(c));
    const selectedElectives = electives.filter((c)=>courses.includes(c));

    return(
        <>
            <div summary-dropdown>
            {show ? 
                <CaretDownOutline
                    color={'#ffffff'} 
                    height="15px"
                    width="15px"
                    onClick={()=>{setShow(!show)}}
                /> : 
                <CaretForwardOutline
                    color={'#ffffff'} 
                    height="15px"
                    width="15px"
                    onClick={()=>{setShow(!show)}}
                />
            }
            <button onClick={()=>{setShow(!show)}}>
                <h3>{title}</h3>
            </button>
            </div>
            {
                show && normalCourses.map((course)=><h5>{course.substring(0, 8)}</h5>)
            }
            {
                show && 
                <>
                    {selectedElectives.length > 0 && <h4>Electives</h4>}
                    {selectedElectives.map((course)=><h5>{course.substring(0, 8)}</h5>)}
                </>
            }
        </>
    )
}
export default DegreeSummary;