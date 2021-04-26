import React, {useEffect, useState} from 'react';
import { CaretForwardOutline } from 'react-ionicons';
import { CaretDownOutline } from 'react-ionicons';

function CourseDropDown({title, courses, limit, updateLimit, selCourses, selElectives}){

    const [show, setShow] = useState(false);
    return(
        <>
        <div className="drop-down">
            {show ? 
                <CaretDownOutline
                    color={'#00000'} 
                    height="20px"
                    width="20px"
                    onClick={()=>{setShow(!show)}}
                /> : 
                <CaretForwardOutline
                    color={'#00000'} 
                    height="20px"
                    width="20px"
                    onClick={()=>{setShow(!show)}}
                />
            }
            <button onClick={()=>{setShow(!show)}}>
                <h3>{title}</h3>
            </button>
        </div>
            {
                show && 
                courses.map((course)=>{
                    return <SingleCourse course={course} limit={limit} updateLimit={updateLimit} selCourses={selCourses} selElectives={selElectives}/>
                })
            }
        </>
    );

}

function SingleCourse({course, limit, updateLimit, selCourses, selElectives}){
    
    //extract variables and call back functions
    const selCoursesList = selCourses[0];
    const setSelCourses = selCourses[1];

    const selElectivesList = selElectives[0];
    const setSelElectives = selElectives[1];
    
    const [checked, setChecked] = useState(false);
    const [canSelect, setCanSelect] = useState(false);

    useEffect(()=>{
        setChecked(selCoursesList.includes(course))
    }, [])
    useEffect(()=>{
        if(selElectivesList.includes(course) && !selCoursesList.includes(course)){
            setCanSelect(false);
        }
        else{
            setCanSelect(true)
        }
    }, [selElectivesList]);
    
    const handleButton = () => {
        if(!canSelect)
            return;

        if(checked){
            updateLimit(limit + 1);
            setChecked(false);
            setSelCourses(selCoursesList.filter(c => c !== course));
            setSelElectives(selElectivesList.filter(c => c !== course));
        }

        else{
            if(limit === 0)
                return;
            updateLimit(limit - 1);
            setChecked(true);
            setSelCourses([course, ...selCoursesList]);
            setSelElectives([course, ...selElectivesList]);
            
        }
    }
    return(
        <div className="drop-down-course">
            {canSelect && <input type='checkbox' onChange={()=>{handleButton()}} checked={checked} /> }
            <h4 className={canSelect ? 'can-select' : 'cannot-select'}>{course}</h4>
        </div>
    )
}

export default CourseDropDown;