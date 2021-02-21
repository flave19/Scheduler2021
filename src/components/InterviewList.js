import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewList.scss"

export default function InterviewList(props) {
  const interviewers = props.interviewers.map((interviewer) => {
    return <InterviewerListItem 
      number = {interviewer.id}
      setInterviewer={props.setInterviewer}
    />;
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}
