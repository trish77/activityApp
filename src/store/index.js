import C from '../constants'
import appReducer from './reducers'
import { thunk } from 'redux-thunk'
import { createStore, applyMiddleWare } from 'redux'

const consoleMessages = store =>  next => action => {
  let result

  console.groupCollapsed(`dispatching action => $(action.type)`)
  console.log('ride days', store.getState().allRideDays.length)
  
  result = next(action)

  let { allRideDays, goal, errors, location } = store.getState()

  console.groupEnd()

  return result
}

export default (initialState={}) => {
  return applyMiddleWare(thunk, consoleMessages)(createStore(appReducer, initialState))
}
