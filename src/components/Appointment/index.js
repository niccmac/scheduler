import React from "react";
import "components/Appointment/styles.scss";
import Show from "./Show";
import Empty from "./Empty";
import Header from "./Header";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
const { interview } = props;

  return (
  <article className="appointment">
    <Header time={ props.time } />
    { props.interview && <Show student={ interview.student } interviewer={ interview.interviewer.name } />}
    { !props.interview && <Empty />}
  </article>
  )
};