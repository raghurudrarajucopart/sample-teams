import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Persona, Select } from '@copart/core-components'
import './TeamMessages.css'

const TeamMessages = ({
  userName,
  userStatus,
}) => {
  const [teamMessages, setTeamMessages] = useState([])
  const [teamMeetings, setTeamMeetings] = useState([])
  return (
    <div className="teamMessages">
      TeamMessages...
    </div>
  )
}

export default TeamMessages
