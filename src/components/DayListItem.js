import React from "react";
import classnames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classnames('day-list__item',{
    'day-list__item--selected': props.selected,
    'day-list__item--full': (props.spots === 0),
  });
  console.log(dayClass);

  function formatSpots(props) {
    if (props.spots === 0) {
      return "no spots remaining";
    }
    if (props.spots === 1) {
      return "1 spot remaining";
    } else {
      return `${props} spots remaining`;
    }
  }

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
