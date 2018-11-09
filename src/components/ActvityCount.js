import "../stylesheets/ui.scss";
import MdDirectionsRun from "react-icons/lib/md/directions-run";
import Horse from "./HorseIcon";
import FaCalendar from "react-icons/lib/fa/calendar";
import {PropTypes} from 'react';


const percentToDecimal = decimal => {
  return decimal * 100 + "%";
};
const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total / goal);
};

export const ActivityCount = ({ total=80, ride=30, workout=50 }) => (
  <div className="activity-count">
    <div className="total-days">
      <span>{total}</span>
      <FaCalendar />
      <span>days</span>
    </div>
    <div className="ride-days">
      <span>{ride}</span>
      <Horse />
      <span>days</span>
    </div>
    <div className="workout-day">
      <span>{workout}</span>
      <MdDirectionsRun />
      <span> days</span>
    </div>
    <div>
      <span>{calcGoalProgress(total, goal)}</span>
    </div>
  </div>
);

ActivityCount.propTypes = {
  total: PropTypes.number,
  ride: PropTypes.number,
  workout: PropTypes.number
}