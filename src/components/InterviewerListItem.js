import React from 'react'
import "components/InterviewerListItem.scss"
let classNames = require('classnames');

export default function InterviewerListItem(props) {
  let interviewClass = classNames("interviewers__item", {
    // 'interviewers__item--selected-image':(props.selected && props.avatar),
    // 'interviewers__item-image':props.avatar,
    'interviewers__item--selected':props.selected,
  })

  return (
    <li 
    className={interviewClass}
    onClick={() => props.setInterviewer(props.name)} >
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
}