import { pathOr, pluck, groupBy } from 'ramda'
import { PersonaPresence } from 'office-ui-fabric-react/lib/Persona';

// import { fetcher, storage } from '@copart/ops-tool-kit'
import { string } from '@copart/front-end-utils'

const UserStatus = [
  {
    key: 'available',
    text: 'Available',
    description: 'Available'
  },
  {
    key: 'busy',
    text: 'Busy',
    description: 'Busy'
  },
  {
    key: 'doNotDisturb',
    text: 'Do Not Disturb',
    description: 'Do Not Disturb'
  },
  {
    key: 'beRightBack',
    text: 'Be right back',
    description: 'Be right back'
  },
  {
    key: 'appearAway',
    text: 'Appear away',
    description: 'Appear away'
  }
]

export const UserCallStatus = [
  {
    key: 'inACall',
    text: 'In a call',
    description: 'In a call'
  },
  {
    key: 'presenting',
    text: 'Presenting',
    description: 'Presenting'
  }
]

export const userPresenceStatus = (status) => {
  switch(status) {
    //let returnVal
    case 'available': {
      return PersonaPresence.online
    }
    case 'offline': {
      return PersonaPresence.offline
    }
    case 'away' : {
      return PersonaPresence.away
    }
    case 'appearAway': {
      return PersonaPresence.away
    }
    case 'beRightBack': {
      return PersonaPresence.away
    }
    case 'busy': {
      return PersonaPresence.busy
    }
    case 'doNotDisturb': {
      return PersonaPresence.dnd
    }
    case 'blocked': {
      return PersonaPresence.blocked
    }
    default: {
      console.log("Invalid choice");
      break;
   }
 }
}

export const getUserStatus = () => {
  // const url = runConfig()?.services?.getEmployeeRoles
  return fetch('https://gorest.co.in/public-api/users/123/posts',{
    "method": "GET",
    "headers": {
    }
  })
  .then((res) => {
    // return formatRoles(res.data)
    return UserStatus
  })
  // .catch((e) => {
  //   const response = pathOr({}, ['response', 'data'])(e)
  //   return {
  //     status: response.statusCode,
  //     message: pathOr(response.message, ['response', 0])(response)
  //   }
  // })
  // return UserStatus
}
