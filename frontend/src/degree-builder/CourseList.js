import React, {useState} from 'react';
import CourseDropDown from './CourseDropDown';
function CourseList({title, courses, dropDowns, selCourses, selElectives}){ 

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
                        console.log("inside courselist, selected is" + section.selected)
                        return <CourseDropDown title={section.title} courses={section.courses} limit={section.limit} updateLimit={section.updateLimit} selCourses={selCourses} selElectives={selElectives}/> 
                    })
                }
            </div>
        </>
    );
}

export default CourseList;