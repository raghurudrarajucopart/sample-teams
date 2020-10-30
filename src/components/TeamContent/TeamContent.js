import React, { useState, useEffect } from 'react'
import TeamMeetings from '../TeamMeetings'
import TeamMessages from '../TeamMessages'
import UserMeetingDetails from '../UserMeetingDetails'
import './TeamContent.css'

const TeamContent = ({
  userName,
  userStatus,
}) => {
  return (
    <div className="teamContent">
      <TeamMeetings />
      <TeamMessages />
      <UserMeetingDetails />
    </div>
  )
}

export default TeamContent
