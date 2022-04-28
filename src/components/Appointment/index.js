import React from "react";
import "components/Appointment/styles.scss";
import Show from "./Show";
import Empty from "./Empty";
import Header from "./Header";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";


export default function Appointment(props) {

  const { interview } = props;

  // Values for transitioning state of form
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE = "ERROR_SAVE";

  //Deconstructing hooks to change state
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  // SAVE APPOINTMENT
  const save = (name, interviewer) => {
    const appointmentID = props.id;
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(appointmentID, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true))
  };

  // CONFIRM/CANCEL ON DELETE
  const confirmRemove = () => {
    transition(CONFIRM)
  }
  
  // EDIT APPOINTMENT
  const editInterview = () => {
    transition(EDIT)
  }

  // DELETE APPOINTMENT
  const remove = () => {
    const appointmentID = props.id;
    transition(DELETING);
    props
      .cancelInterview(appointmentID)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true))
  }

  // JSX FOR INDIVIDUAL APPOINTMENT SLOTS
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={ () => transition(CREATE) } />}
      {mode === SHOW && (
        <Show
          student={ interview.student }
          interviewer={ interview.interviewer }
          onDelete={ confirmRemove }
          onEdit={ editInterview }
        />
      )}
      {mode === CREATE && <Form
        interviewers={ props.interviewers }
        onCancel={ back }
        onSave={ save }
      />}
      {mode === EDIT && <Form
        student={ props.interview.student }
        interviewer={ props.interview.interviewer.id }
        interviewers={ props.interviewers }
        onCancel={ back }
        onSave={ save }
      />}
      {mode === SAVING && <Status message={ "Saving" } />}
      {mode === DELETING && <Status message={ "Deleting" } />}
      {mode === CONFIRM && <Confirm onConfirm={ remove } onCancel={ back } message={ "Are you sure you would like to delete?" } />}
      {mode === ERROR_DELETE && <Error onClose={ back } message={ "Cannot cancel your appointment." } />}
      {mode === ERROR_SAVE && <Error onClose={ back } message={ "Cannot save your appointment." } />}
    </article>
  )
};

