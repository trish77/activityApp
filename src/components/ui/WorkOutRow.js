import MdDirectionsRun from "react-icons/lib/md/directions-run";
import Horse from "../HorseIcon";
import { PropTypes } from "react";

export const WorkOutRow = ({ location, date, ride, workout, onRemoveDay=f=>f }) => (
  <tr onDoubleClick={() => onRemoveDay(date)}>
    <td>
      {date} 
    </td>
    <td>{location}</td>
    <td>{(ride) ? <Horse /> : null}</td>
    <td>{(workout) ? <MdDirectionsRun /> : null}</td>
  </tr>
);

WorkOutRow.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  ride: PropTypes.bool,
  workout: PropTypes.bool,
  onRemoveDay: PropTypes.func

};
