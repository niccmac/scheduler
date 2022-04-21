import React from "react";
import "components/DayListItem";
import DayListItem from "components/DayListItem";

export default function DayList(props) {

  const { days } = props;
  const { onChange } = props;
  const dayValuesMapped =  days.map((dayValues) => < DayListItem 
    key = { dayValues.id } 
    selected = { dayValues.name === props.value } 
    spots = { dayValues.spots } 
    name = { dayValues.name } 
    onChange={ onChange } /> )
  
  return(
    <ul>{ dayValuesMapped }</ul>
  )
}; 