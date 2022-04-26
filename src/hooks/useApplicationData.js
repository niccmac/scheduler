import React, { useState, useEffect } from "react";
import axios  from "axios";

export default function useApplicationData () {
  
  // Set state using DB queries
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  const { days, day, appointments  } = state;
  const setDay = day => setState(prev => ({ ...prev, day }));
  
  const URLS = {
    "GET_DAYS": `http://localhost:8001/api/days`,
    "GET_APPOINTMENTS": `http://localhost:8001/api/appointments`,
    "GET_INTERVIEWERS": `http://localhost:8001/api/interviewers`
  }
  useEffect(() => {
    Promise.all([
      axios.get(URLS.GET_DAYS),
      axios.get(URLS.GET_APPOINTMENTS),
      axios.get(URLS.GET_INTERVIEWERS)
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    })
  }, []);


  //Update spots if appointment add or delete
 
 
  const updateSpots = (requestType) =>{
    const mappedDays = days.map((eachDay) => { 
      if (eachDay.name === state.day) {
        if (requestType === "bookInterview") {
          return { ...eachDay, spots: eachDay.spots - 1 }
        }
        return { ...eachDay, spots: eachDay.spots + 1 }
      }
      return { ...eachDay }
     })
   return mappedDays;
 }


  // Update DB with new/edited appointment
  const bookInterview = async (id, interview) => {
   
    //Create state
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    //Add new appointment to DB, then update state
    await axios.put(`/api/appointments/${id}`, appointment)
      .then(() => {
        const days = updateSpots("bookInterview")
        setState({ ...state, appointments, days })
      })
    return
  };

  const cancelInterview = async(id) => {
   
    //Create state
    const appointment = {
     ...state.appointments[id],
     interview:  null 
   };
   const appointments = {
     ...state.appointments,
     [id]: appointment
   };
 //Delete appointment from DB, then update state
     await axios.delete(`/api/appointments/${id}`, appointment )
     .then(() => {
       const days = updateSpots()
       setState({ ...state, appointments, days })
      })
     return 

 }
 return {
   state,
   setDay,
   bookInterview,
   cancelInterview
 }

}