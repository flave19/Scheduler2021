import React from 'react'
import "components/DayListItem.scss";
let classNames = require('classnames');

export default function DayListItem(props) {
  let dayClass = classNames('day-list__item',{
    'day-list__item--selected': props.selected,
    'day-list__item--full': (props.spots === 0)
  })

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
    <li className={dayClass} onClick={() => props.setDay(props.name)} >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
