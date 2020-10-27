import {
  UPDATE_TEAMS_DATA
} from '../constants/actionTypes'

const initialState = {
  teamsData: {}
}

const teamsConfig = (state = initialState, action={}) => {
  console.log('action: ', action)
  // if(action) {
    switch (action.type) {
      case UPDATE_TEAMS_DATA:
        return {
          ...state,
          teamsData: action.data
        }
      default: {
        return state
      }
    }
  // }
}

export default teamsConfig
