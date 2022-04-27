import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import React, { useState } from "react";
import "components/Appointment/styles.scss";


// PROPS: 
//
//

// RETURN:
//
//

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const keyString = ( Math.random() + 6).toString(36).substring(7);
 
  const cancelHandle = function(e) {
    e.preventDefault();
    props.onCancel()
  }
  const savehandle = function() {
    props.onSave(student, interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={ student }
            onChange={(e) => setStudent(e.target.value)}
            data-testid="student-name-input"
          />
        </form>

        <InterviewerList
          key={ keyString }
          interviewers={ props.interviewers }
          value={ interviewer }
          onChange= { setInterviewer }
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={ (e) => cancelHandle(e) } danger>Cancel</Button>
          <Button onClick={ () => savehandle() }confirm>Save</Button>
        </section>
      </section>
    </main>

  )
};

