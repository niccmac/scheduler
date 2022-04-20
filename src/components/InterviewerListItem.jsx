import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const interviewerSelected = classNames("interviewers__item",{
    "interviewers__item--selected": props.selected
  });
  let name = "";
  const showHideName = () => {
    if (props.selected) {
      name = props.name;
    }
  };
  showHideName();
  return (
    <li className={interviewerSelected} onClick={() => props.setInterviewer(props.id)}>
      <img
        className={interviewerSelected +"-image"}
        src={props.avatar}
        alt="Sylvia Palmer"
      />
      {name}
    </li>
  )
};
