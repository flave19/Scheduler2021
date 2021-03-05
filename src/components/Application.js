import React, { useState, useEffect } from "react";
import DayList from "components/DayList";
import "components/Application.scss";
import "components/Appointment";
import Appointment from "components/Appointment";

import axios from 'axios'

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
  {
    id: 1,
    time: "2pm",
  },
  {
    id: 2,
    time: "3pm",
    interview: {
      student: "Lydia 2",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
  {
    id: 2,
    time: "4pm",
    interview: {
      student: "Miller 3",
      interviewer: {
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
];


export default function Application(props) {
  const [day, setDay] = useState([]);

  useEffect(() => {
    axios.get("/api/days").then(response => {
      // setDay([...response])
      console.log(response)
    })
  },[])

  console.log(day);

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
          <DayList day={day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map((appointment) => {
          return (
            <Appointment key={appointment.id} {...appointment}></Appointment>
          );
        })}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
