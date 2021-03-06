import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";


export default function DayListItem(props) {

  const { spots, onChange } = props;

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  })

  // Func to check if spot should be singular or zero?
  let spotsText = spots + ' spots remaining';
  const formatSpots = () => {
    if (spots === 0) (
      spotsText = "no spots remaining"
    )
    if (spots === 1) {
      spotsText = "1 spot remaining"
    };
  };
  formatSpots();
  
  // JSX for each day
  return (
    <li data-testid="day" onClick={ () => onChange(props.name) } className={ dayClass } selected={ props.selected }>
      <h2 >{ props.name }</h2>
      <h3 >{ spotsText }</h3>
    </li>
  );
};