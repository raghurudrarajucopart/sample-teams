import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Persona, Select } from '@copart/core-components'
import './UserMeetingDetails.css'

const UserMeetingDetails = ({
  userName,
  userStatus,
}) => {
  const [teamMessages, setTeamMessages] = useState([])
  const [teamMeetings, setTeamMeetings] = useState([])
  return (
    <div className="userMeetingDetails">
      UserMeetingDetails...
    </div>
  )
}

export default UserMeetingDetails
