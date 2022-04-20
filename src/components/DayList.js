import React from "react";
import "components/DayListItem";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const { days } = props;
  const dayValuesMapped =  days.map((day) => < DayListItem key = { day.id } selected = { day.name === props.day } spots = { day.spots } name = { day.name } setDay={props.setDay} /> )
  
  return(
    <ul>{ dayValuesMapped }</ul>
  )
}; 