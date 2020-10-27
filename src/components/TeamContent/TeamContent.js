import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Persona, Select } from '@copart/core-components'
import TeamMeetings from '../TeamMeetings'
import TeamMessages from '../TeamMessages'
import UserMeetingDetails from '../UserMeetingDetails'
import './TeamContent.css'

const TeamContent = ({
  userName,
  userStatus,
}) => {
  const [teamMessages, setTeamMessages] = useState([])
  const [teamMeetings, setTeamMeetings] = useState([])
  return (
    <div className="teamContent">
      <TeamMeetings />
      <TeamMessages />
      <UserMeetingDetails />
    </div>
  )
}

export default TeamContent
