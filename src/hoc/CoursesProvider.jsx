import { createContext, useEffect, useState } from "react";

export const CoursesContext = createContext([]);

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const getData=()=>{
    fetch('courses.json')
      .then(response => response.json())
      .then(myJson => setCourses(myJson.courses))
      .catch(error => console.error(error.message));
  }

  useEffect(() => {
    getData();       
  }, [])

  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  )
}