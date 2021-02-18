import React from "react";
import classnames from "classnames";

import "components/DayListItem.scss"

export default function DayListItem(props) {
  let dayClass = classnames("day-list__item", {
    "day-list__item--selected":props.selected,
    "day-list__item--full": !props.spots
  })
  console.log(dayClass)

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots}</h3>
    </li>
  );
}