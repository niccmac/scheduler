import React, { useState } from "react"; 
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  // const [interviewerID, setInterviewerID] = useState();
    const { interviewers } = props;
    const mapInterviewersToList = interviewers.map((person) => 
    <InterviewerListItem 
    key={ person.id }
    name={ person.name }  
    avatar={ person.avatar } 
    selected={ props.value === person.id }
    setInterviewer={ () => { props.onChange(person.id) } }
    />
    )
   
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list" >{mapInterviewersToList}</ul>
    </section>
  );
};