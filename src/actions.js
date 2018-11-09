import C from './constants'
import fetch from 'isomorphic-fetch'

export function addDay(location, date, ride=false, workout=false) {

  return {
    type: C.ADD_DAY,
    payload: {location, date, ride, workout}
  }
}

export const removeDay = (date) => {
  return {
    type: C.REMOVE_DAY,
    payload: date
  }
}

export const setGoal = (goal) => 
  ({
    type: C.SET_GOAL,
    payload: goal
  })

  export const addError = (message) =>
  ({
    type: C.ADD_ERROR,
    payload: message
  })

  export const clearError = index =>
  ({
    type: C.CLEAR_ERROR,
    payload: index
  })

  export const changeSuggestion = suggestions =>
  ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions
  })

  export const suggestTrailNames = value => dispatch => {

    dispatch({
        type: C.FETCH_TRAIL_NAMES
    })

    fetch('http://localhost:3333/trails/' + value)
        .then(response => response.json())
        .then(suggestions => {

            dispatch({
                type: C.CHANGE_SUGGESTIONS,
                payload: suggestions
            })

        })
        .catch(error => {

            dispatch(
                addError(error.message)
            )

            dispatch({
                type: C.CANCEL_FETCHING
            })

        })
      }