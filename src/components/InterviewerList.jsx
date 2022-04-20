import React, { useState } from "react"; 
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  // const [interviewerID, setInterviewerID] = useState();
    const { interviewers } = props;
    const mapInterviewersToList = interviewers.map((person) => 
    <InterviewerListItem 
    name={ person.name } 
    // id={ person.id } 
    avatar={ person.avatar } 
    // interviewerID={ interviewerID }
    selected={ props.interviewer === person.id }
    key={ person.id }
    setInterviewer={ (e) => { props.setInterviewer(person.id) } }
    />
    )
   
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list" >{mapInterviewersToList}</ul>
    </section>
  );
};