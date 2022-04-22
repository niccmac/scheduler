import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios  from "axios";

export default function Application(props) {
  
  const [ state, setState ] = useState({
    day: "Monday",
    days: [], 
    appointments: {}
  })
  
  const setDay = day => setState(prev => ({ ...prev, day }));
  
  const dailyAppointments = [];
  const URLS = {
    "GET_DAYS":     `http://localhost:8001/api/days`,
    "GET_APPOINTMENTS": `http://localhost:8001/api/appointments`,
    "GET_INTERVIEWERS": `http://localhost:8001/api/interviewers`
  }
  useEffect(() => {
    Promise.all([
      axios.get(URLS.GET_DAYS),
      axios.get(URLS.GET_APPOINTMENTS)
      // axios.get(URLS.GET_INTERVIEWERS)
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data }));
    })
  }, [])
   
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        { dailyAppointments.map((values) => <Appointment
          key={values}
          id={values.id}
          time={values.time}
          interview={values.interview}
        />)
        }
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}

