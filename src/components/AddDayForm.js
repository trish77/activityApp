import { PropTypes, Component } from 'react'
import Autocomplete from './ui/Autocomplete'

const AddDayForm = ({ suggestions=[], onNewDay=f=>f, onChange=f=>f, onClear=f=>f, fetching=false, router}) => {

  let _location, _date, _ride, _workout

  const submit = e => {
    e.preventDefault()
    onNewDay({
        location: _location.value,
        date: _date.value.toString(),
        ride: _ride.checked,
        workout: _workout.checked
    })


    const addAnother = confirm(`${_location.value} on ${_date.value.toString()} added. Add another?`)

    if (!addAnother) {
        router.push('/')
    }

    _location.value = ''
    _date.value = ''
    _ride.checked = false
    _workout.checked = false

}


  return (
    <form onSubmit={submit} className="add-day">
      <label htmlFor="location">Location</label>
      <Autocomplete 
         ref={input => _location = input} 
         suggestions={suggestions}
         onChange={() => onChange(_location.value)}
         fetching={fetching}
         onClear={onClear} />
      <label htmlFor="date">Date</label>
      <input id="date" 
              type="date"
              ref={input => _date = input}
              required/>
      <div>
      
      <input id="ride" 
             type="checkbox" 
             ref={input => _ride = input}  />
      <label htmlFor="ride">Riding</label>
      </div>
      <div>
      <input id="workout" 
             type="checkbox" 
             ref={input => _workout = input}  />
      <label htmlFor="workout">Work Out</label>

      </div>
      <button>Add Day</button>
    </form>
  )
}


AddDayForm.PropTypes = {
  suggestions: PropTypes.array,
  onNewDay: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  router: PropTypes.object
}

export default AddDayForm
