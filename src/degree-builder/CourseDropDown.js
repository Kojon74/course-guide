import React, {useEffect, useState} from 'react';
import { CaretForwardOutline } from 'react-ionicons';
import { CaretDownOutline } from 'react-ionicons';

function CourseDropDown({title, courses, limit, updateLimit, selectedCourses, selected, setSelected}){

    const [show, setShow] = useState(false);
    console.log("selected is " + selected)
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
                    return <SingleCourse course={course} limit={limit} updateLimit={updateLimit} selectedCourses={selectedCourses} selected={selected} setSelected={setSelected}/>
                })
            }
        </>
    );

}

function SingleCourse({course, limit, updateLimit, selectedCourses, selected, setSelected}){
    
    //extract variables and call back functions
    const selectedCoursesList = selectedCourses[0];
    const setSelectedCourses = selectedCourses[1];
    
    const [checked, setChecked] = useState(false);
    const [canSelect, setCanSelect] = useState(false);

    console.log(selected)
    useEffect(()=>{
        if(!selectedCoursesList.includes(course) && selected.includes(course)){
            setChecked(false);
            setCanSelect(false);
        }
        else if(selectedCoursesList.includes(course)){
            setChecked(true);
            setCanSelect(true);
        }
        else{
            setCanSelect(true);
        }
    }, [])
    useEffect(()=>{
        if(selected.includes(course) && !selectedCoursesList.includes(course)){
            setCanSelect(false);
        }
        else{
            setCanSelect(true)
        }
    }, [selected]);
    
    const handleButton = () => {
        if(!canSelect)
            return;

        if(checked){
            updateLimit(limit + 1);
            setChecked(false);
            setSelectedCourses(selectedCoursesList.filter(c => c !== course));
            setSelected(selected.filter(c => c !== course));
        }

        else{
            if(limit === 0)
                return;
            setChecked(true);
            updateLimit(limit - 1);
            setSelectedCourses([course, ...selectedCoursesList]);
            setSelected([course, ...selected]);
            
        }
    }
    return(
        <div className="drop-down-course">
            {canSelect && <input type='checkbox' onChange={()=>{handleButton()}} checked={checked}/>} 
            <h4 className={canSelect ? 'can-select' : 'cannot-select'}>{course}</h4>
        </div>
    )
}

export default CourseDropDown;