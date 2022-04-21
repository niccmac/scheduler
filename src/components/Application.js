import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios  from "axios";

const appointments = {
  "1": {
    id: 1,
    time: "12pm",
  },
  "2": {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  "3": {
    id: 3,
    time: "2pm",
  },
  "4": {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  "5": {
    id: 5,
    time: "4pm",
  }
};


export default function Application(props) {
  const [day, setDay] = useState(`Monday`);
  const days = [];
  const daysURL = `http://localhost:8001/api/days`;
  useEffect(() => axios.get(daysURL)
  .then((response) => {
    console.log(`Axios Day URL response:`, response)
    days.push(response);})
  .catch((error) => {
    console.log(`Axios Day URL get error status:`,error.response.status);
    console.log(`Axios Day URL get error header:`,error.response.header);
    console.log(`Axios Day URL get error data:`,error.response.data);
  }),[]);

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
            days={days}
            value={day}
            onChange={"in here"}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        { Object.values(appointments).map((values) => <Appointment
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

