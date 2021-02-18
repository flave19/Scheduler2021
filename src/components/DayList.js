import React from "react";
import DayListItem from "./DayListItem";

export default function Daylist(props) {
  const lists = props.days.map(day => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{lists}</ul>;
}
