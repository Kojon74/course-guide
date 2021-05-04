import React, {useEffect, useState} from 'react';
import { CaretForwardOutline } from 'react-ionicons';
import { CaretDownOutline } from 'react-ionicons';

function CourseList({title, courses, selCourses, selElectives, electives, resetSearch, searchId, id}){ 

    return(
        <>
            <h2>{title}</h2>
            <div className="course">
                {
                    courses.map((course) => {
                       return <h4>{course.title}</h4>; 
                    })
                }
            </div>
            {
               electives.map((elective) => {

                    return(
                        <ElectiveSection elective={elective} selCourses={selCourses} selElectives={selElectives} resetSearch={resetSearch} searchId={searchId} id={id + elective.id}/>
                    )
               }) 
            }
        </>
    );
}

function ElectiveSection({elective, selCourses, selElectives, resetSearch, searchId, id}){

    const [selCoursesList, setSelCourses] = selCourses;
    const [resetSearchVar, setResetSearch] = resetSearch;
    const [searchIdVar, setSearchId] = searchId;

    const [search, setSearch] = useState(false);

    const chosenElectives = elective.courses.filter((course)=>{
        for(let selCourse of selCoursesList){
            if(course.title == selCourse.title)
                return true;
        }
        return false;
    });
    
    const toggleSearch = ()=>{
        setSearchId(id);
        setResetSearch(!resetSearchVar);
    }

    useEffect(()=>{
        if(searchIdVar == id){
            setSearch(!search);
        }
        else{
            setSearch(false);
        }
    }, [resetSearchVar, searchIdVar]);

    return(
        <>
            <div className="elective-section-title" onClick={()=>toggleSearch()}>
                {search ?  
                    <CaretDownOutline
                        color='#035B96' 
                        height="20px"
                        width="20px"
                    /> : 
                    <CaretForwardOutline
                        color='#00000' 
                        height="20px"
                        width="20px"
                    />
                }
                <h3 className={search ? "search-elective-section" : "elective-section"}>{elective.sectionTitle}</h3>
            </div>
            {
                //TODO: Change so that an 'x' button shows up on hover, and the user is able to delete the button if they want
                chosenElectives.map((course)=>{return <h4 className="course">{course.title}</h4>})
            }
            {
                search && 
                <ElectiveSearch title={elective.sectionTitle} courses={elective.courses} selCourses={selCourses} selElectives={selElectives}/>
            }
       </> 
    );


}

function ElectiveSearch({title, courses, selCourses, selElectives}){
    return(
        <div className="elective-search">
            <h2>{title}</h2>
            {
                courses.map((course)=><ElectiveCourse title={course.title} credits={course.credits} selCourses={selCourses} selElectives={selElectives}/>)
            }
        </div>
    )
}
function ElectiveCourse({title, credits, selCourses, selElectives}){

    // destructure array
    const [selCoursesList, setSelCourses] = selCourses;
    const [selElectivesList, setSelElectives] = selElectives;
    
    const [checked, setChecked] = useState(false);
    const [canCheck, setCanCheck] = useState(true);
    const handleClick = () => {
        if(!canCheck)
           return;

        // if it is checked, remove the element from both arrays
        if(checked){
          let newSelCourses = selCoursesList.filter((course)=>{
            return course.title !== title;
          })
          let newSelElectives = selElectivesList.filter((course)=>{
            return course.title !== title;
          })
          setSelCourses(newSelCourses);
          setSelElectives(newSelElectives);
        }
        // otherwise add the element to both arrays
        else{
          setSelCourses([{title: title, credits: credits}, ...selCoursesList])
          setSelElectives([...selElectivesList, {title: title, credits: credits}])
        }
        
        setChecked(!checked)
    }

    const contains = (arr, title) => {
      for(let i = 0; i < arr.length; i++){
        if(arr[i].title === title)
          return true;
      }
      return false;
    }

    useEffect(()=>{        
        // check if we can check or not
        if(contains(selElectivesList, title) && !contains(selCoursesList, title)){
          setCanCheck(false);
        }
        else{
          setCanCheck(true);
        }
    }, [selElectivesList, selCoursesList])

    useEffect(()=>{
        // assign canCheck
        if(contains(selElectivesList, title)){
          if(contains(selCoursesList, title)){
            setCanCheck(true);  
          }
          else setCanCheck(false);
        }
        else{
          setCanCheck(true);
        }

        // assign checked
        if(contains(selCoursesList, title)){
          setChecked(true);
        }
        else{
          setChecked(false);
        }
    }, []);

    return(
        <div className="search-course">
            {   
                canCheck && 
                <input type='checkbox' onChange={()=>{handleClick()}} checked={checked} />
            }
            <h3 className={canCheck ? "can-select" : "cannot-select"}>{title}</h3>
        </div>
    )

}

export default CourseList;