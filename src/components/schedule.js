import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { RECURRENCE_DAY_MAP } from "../constants";
import { getDateDisplay } from "../utils";
import ExperienceList from "./experience-list";

const Schedule = ({ experiencesByDay, recurring }) => {
  const scheduleItems = Object.keys(experiencesByDay).map((day) => {
    const listHeading = recurring
      ? RECURRENCE_DAY_MAP[day]
      : getDateDisplay(day, { includeDay: true, includeSuffix: true });

    return (
      <li key={day} className="mg-b-xl">
        <div
          className={classNames("bold mg-b-sm pd-l-md", {
            "uppercase": recurring
          })}
        >
          {listHeading}
        </div>
        <ExperienceList experiences={experiencesByDay[day]}/>
      </li>
    );
  });

  return <ul>{scheduleItems}</ul>;
};

Schedule.propTypes = {
  experiencesByDay: PropTypes.objectOf(ExperienceList.propTypes.experiences),
  recurring: PropTypes.bool
};

export default Schedule;