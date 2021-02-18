import React from "react";
import classnames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });
  console.log(dayClass);
  
  let formatSpots = "";

  if (props.spots === 0) {
    formatSpots = 'no spots remaining'
  }
  if (props.spots === 1) {
    formatSpots = "1 spot remaining";
  }
  if (props.spots === 2) {
    formatSpots = "2 spots remaining";
  }

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots}</h3>
    </li>
  );
}
