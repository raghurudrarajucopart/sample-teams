import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Tooltip, Icon, Button } from '@copart/core-components'
import Chat from '../Chat'
import './ActiveMessage.css'

const ActiveMessage = ({
  items,
  recentMessageFrom,
  newMessage,
  handleNewMessage,
  saveMessage
}) => {
  return (
    <div className="teamMessagesInner activeMessage">
      <div style={{height: '24px', textAlign: 'left', lineHeight: '24px', fontWeight: 'bold'}}>{recentMessageFrom.userName}</div>
      <div className="activeMessageList">
        <Chat items={items} />
      </div>
      <div className="newMessageContainer">
        <Input
          label=""
          placeholder="Type a new message"
          multiline
          rows={2}
          value={newMessage}
          onChange={(e, i) => handleNewMessage(e, i)}
        />
      <Button onClick={saveMessage} primary>
        Send
        </Button>
        </div>
    </div>
  )
}

export default ActiveMessage
