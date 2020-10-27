import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Persona, Select } from '@copart/core-components'
import './TeamMeetings.css'

const TeamMeetings = ({
  userName,
  userStatus,
}) => {
  const [teamMessages, setTeamMessages] = useState([])
  const [teamMeetings, setTeamMeetings] = useState([])
  return (
    <div className="teamMeetings">
      TeamMeetings...
    </div>
  )
}

export default TeamMeetings
