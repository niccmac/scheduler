import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";


export default function InterviewerListItem(props) {

  const interviewerSelected = classNames("interviewers__item",{
    "interviewers__item--selected": props.selected
  });
  
  // JSX for each interviewer in list
  return (
    <li className={ interviewerSelected } onClick={ props.setInterviewer }>
      <img
        className={"interviewers__item-image"}
        src={ props.avatar }
        alt={ props.name }
      />
      { props.selected && props.name }
    </li>
  );
};
