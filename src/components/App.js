import { Component } from "react";
import { WorkOutList } from "./WorkOutList";
import { ActivityCount } from "./ActivityCount";
import { AddDayForm } from "./AddDayForm";
import { Menu } from "./Menu"

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allRideDays: [{
        location: "Prairie Life",
        date: "10/2/2018",
        ride: false,
        workout: true
      }
    ]
  }
  this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allRideDays: [
        ...this.state.allRideDays,
        newDay
      ]
    })
  }
  
  countDays(filter) {
    return this.state.allRideDays.filter(function (day) {
      if (filter) {
        return day[filter];
      } else {
        return day;
      }
    }).length;
  }

  render() {
    return ( 
    <div className="app"> 
      <Menu />
      {(this.props.location.pathname === "/") ?
        <ActivityCount
        total = {this.countDays() }
        ride = { this.countDays("ride")}
        workout = {this.countDays("workout")} /> :
        (this.props.location.pathname === "/add-day") ?
        <AddDayForm onNewDay={this.addDay} /> :
        <WorkOutList days={ this.state.allRideDays} filter={this.props.params.filter} />	
         } 
         </div>
    )
  }
}