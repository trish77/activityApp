import C from '../constants'
import { combineReducers } from 'redux'

export const goal = (state = 10, action) =>
  (action.type === C.SET_GOAL) ?
  action.payload :
  state

export const rideDay = (state = null, action) =>
  (action.type === C.ADD_DAY) ?
  action.payload :
  state

export const errors = (state = [], action) => {
  switch (action.type) {

    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
      case C.CLEAR_ERROR:
      return state.filter((message, i ) => false)
      
    default:
      return state

  }
}

export const allRideDays = (state=[], action) => {

  switch(action.type) {
    case C.ADD_DAY :
    const hasDayAlready = state.some(rideDay => rideDay.date === payload.date)
    return (hasDayAlready) ?
    state :
    [
      ...state,
      rideDay(null, action)
    ]

    case C.REMOVE_DAY :
    return state.filter(rideDay => rideDay.date !== action.payload)

    default: 
    return state
  }
}

export const fetching = (state=false, action) => {
  switch(action.type) {
    
    case C.FETCH_TRAIL_NAMES :
    return true

    case C.CANCEL_FETCHING :
    return false

    case C.CHANGE_SUGGESTIONS :
    return false    

    default:
    return state
  }
}

export const suggestions = (state=[], action) => {

  switch(action.type) {

    case C.CLEAR_SUGGESTIONS :
    return []

    case C.CHANGE_SUGGESTIONS :
    return action.payload
  
    default:
    return state
  }
}


export default combineReducers({
  allRideDays,
  goal,
  errors,
  location : combineReducers({
    fetching,
    suggestions
  })
})