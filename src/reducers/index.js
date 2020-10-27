import { combineReducers } from 'redux'
import search from './teams'

const createReducer = (asyncReducer) => {
  const appReducer = combineReducers({
    search,
    ...asyncReducer
  })
  const rootReducer = (state, action) => appReducer(state, action)
  return rootReducer
}

export default createReducer
