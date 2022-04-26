import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';


export default function InterviewerList(props) {
  
  
  // Check props types
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };
  
  const { interviewers } = props;
  const interviewersArray = Object.entries(interviewers);
  

  const mapInterviewersToList = interviewersArray.map((person) =>

  <InterviewerListItem
      key={person[1].id}
      name={person[1].name}
      avatar={person[1].avatar}
      selected={props.value === person[1].id}
      setInterviewer={() => { props.onChange(person[1].id) }}
    />
  )

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list" >{mapInterviewersToList}</ul>
    </section>
  );
};