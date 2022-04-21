import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import React, { useState } from "react";
import "components/Appointment/styles.scss";

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={ props.interviewers }
          value={ props.value}
          onChange= { props.onChange }
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={ props.onCancel } danger>Cancel</Button>
          <Button onClick={ props.onSave }confirm>Save</Button>
        </section>
      </section>
    </main>

  )
};