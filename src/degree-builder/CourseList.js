import React, {useState} from 'react';
import CourseDropDown from './CourseDropDown';
function CourseList({title, courses, dropDowns, chosenCourses, updateChosen}){ 


    return(
        <>
            <h2>{title}</h2>
            <div className="course-year">
                {
                    courses.map((course) => {
                       return <h4>{course}</h4>; 
                    })
                }
                {   dropDowns && 
                    dropDowns.map((section) => {
                        return <CourseDropDown title={section.title} courses={section.courses} limit={section.limit} updateLimit={section.updateLimit} chosenCourses={chosenCourses} updateChosen={updateChosen}/> 
                    })
                }
            </div>
        </>
    );
}

export default CourseList;