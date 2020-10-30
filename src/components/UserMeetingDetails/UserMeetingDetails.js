import React, { useState, useEffect } from 'react'
import MeetingDetails from './meetingDetails'
import PhoneDialerPad from './phoneDailerPad'
import './UserMeetingDetails.css'

const UserMeetingDetails = ({
}) => {
  return (
    <div className="teamContentInner userMeetingDetails">
      <MeetingDetails />
      <PhoneDialerPad />
    </div>
  )
}

export default UserMeetingDetails
