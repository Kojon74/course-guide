import React, {useEffect, useState} from 'react';
import { CaretForwardOutline } from 'react-ionicons';
import { CaretDownOutline } from 'react-ionicons';

function CourseDropDown({title, courses, limit, updateLimit, chosenCourses, updateChosen}){

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
                    return <SingleCourse course={course} limit={limit} updateLimit={updateLimit} chosenCourses={chosenCourses} updateChosen={updateChosen}/>
                })
            }
        </>
    );

}

function SingleCourse({course, limit, updateLimit, chosenCourses, updateChosen}){
    const [checked, setChecked] = useState(false);
   
    useEffect(()=>{
        if(chosenCourses.includes(course)){
            setChecked(true);
        }
    }, [])
    
    const handleButton = () => {
        if(checked){
            updateLimit(limit + 1);
            setChecked(false);
            updateChosen(chosenCourses.filter(c => c !== course));
        }
        else{
            if(limit === 0)
                return;
            setChecked(true);
            updateLimit(limit - 1);
            updateChosen([course, ...chosenCourses]);
        }
    }
    return(
        <div className="drop-down-course">
            <input type='checkbox' onChange={()=>{handleButton()}} checked={checked}/> 
            <h4>{course}</h4>
        </div>
    )
}

export default CourseDropDown;