import React, { useState, useEffect } from 'react'
import TaskList from '../TaskList'
import MeetingList from '../MeetingList'
import './TeamMeetings.css'

const TeamMeetings = ({
}) => {
  return (
    <div className="teamContentInner teamMeetings">
      <TaskList />
      <MeetingList />
    </div>
  )
}

export default TeamMeetings
