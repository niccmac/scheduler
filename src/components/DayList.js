import React from "react";
import "components/DayListItem";
import DayListItem from "components/DayListItem";


export default function DayList(props) {

  const { days, onChange } = props;

  const dayValuesMapped =  days.map((dayValues) => < DayListItem 
    key = { dayValues.id } 
    selected = { dayValues.name === props.day } 
    spots = { dayValues.spots } 
    name = { dayValues.name } 
    onChange={ onChange } /> );
  
    // JSX for days list
  return(
    <ul>{ dayValuesMapped }</ul>
  );
}; 