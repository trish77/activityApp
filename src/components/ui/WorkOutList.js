import MdDirectionsRun from "react-icons/lib/md/directions-run";
import Horse from "../HorseIcon";
import { WorkOutRow } from "./WorkOutRow";
import { PropTypes } from "react";
import { Link } from 'react-router'

export const WorkOutList = ({ days, filter, onRemoveDay=f=>f }) => {
  const filteredDays = (!filter || 
    !filter.match(/ride|workout/))?
    days:
    days.filter(day => day[filter])

    const activeFilterStyle = {
      textDecoration: 'none',
      color: 'black'
  }
  return (
    <div className="workout-list">
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Location</th>
        <th>Ride</th>
        <th>Workout</th>
      </tr>
      <tr>
        <td colSpan={4}>  
        <Link to="/list-days" style={(!filter) ? activeFilterStyle : null}>
        All Days
        </Link>
        <Link to="/list-days/ride" activeStyle={activeFilterStyle}>
        Ride Days
        </Link>
        <Link to="/list-days/workout" activeStyle={activeFilterStyle}>
        Work Out Days
        </Link>
        </td>
      </tr>
      
    </thead>
    <tbody>
      {filteredDays.map((day, i) => 
        <WorkOutRow key={i} {...day} onRemoveDay={onRemoveDay} />
      )}
    </tbody>
  </table>
  </div>
  )
}

WorkOutList.propTypes = {
  filter: PropTypes.oneOf(['ride', 'workout']),
  onRemoveDay: PropTypes.func,

  days: (props) => 
    (!Array.isArray(props.days)) ?
       new Error("WorkOutList Should be an array") :
    (!props.days.length) ?
      new Error("WorkOutList must have one record") :
      null
    
  }
