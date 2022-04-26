import React, { useEffect } from "react";
import "components/Appointment/styles.scss";
import Show from "./Show";
import Empty from "./Empty";
import Header from "./Header";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment(props) {
  const { interview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  const save = (name, interviewer) => {
    const appointmentID = props.id;
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(appointmentID, interview)
    .then(() => transition(SHOW))
  };
 const confirmRemove = () => {
  transition(CONFIRM)
 }

  const remove = () => {
    const appointmentID = props.id;
    transition(SAVING);
    props.cancelInterview(appointmentID)
    .then(() => transition(EMPTY))
  }

  return (
    <article className="appointment">
      <Header time={ props.time } />
      { mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      { mode === SHOW && (
        <Show
          student={ interview.student }
          interviewer={  interview.interviewer }
          onDelete={ confirmRemove }
        />
      )}
      { mode === CREATE && <Form 
      interviewers={ props.interviewers } 
      onCancel={ back }
      onSave={ save }
      /> }
      { mode === SAVING && <Status message={ "Saving" }/>}
      { mode === DELETING && <Status message={ "Deleting" }/>}
      { mode === CONFIRM && <Confirm onConfirm={ remove } message={ "Are you sure you would like to delete?" }/>}
    </article>
  )
};

