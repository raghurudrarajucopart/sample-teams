import React, { useState, useEffect } from 'react'
import MessagesList from '../MessagesList'
import ActiveMessage from '../ActiveMessage'
import './TeamMessages.css'
const DefaultMessages = [
  {
    userName: 'Dinesh G',
    updatedAt: new Date(),
    lastMessage: 'testing5',
  },
  {
    userName: 'Rakesh Ranjan',
    updatedAt: 'Fri Oct 30 2020 03:10:00 GMT+0530 (India Standard Time)',
    lastMessage: 'testing4',
  },
  {
    userName: 'Jagan T',
    updatedAt: 'Thu Oct 29 2020 15:59:59 GMT+0530 (India Standard Time)',
    lastMessage: 'test3',
  },
  {
    userName: 'Sandeep K',
    updatedAt: 'Thu Oct 29 2020 12:00:00 GMT+0530 (India Standard Time)',
    lastMessage: 'testing1',
  },
  {
    userName: 'Rama Nakka',
    updatedAt: 'Thu Oct 29 2020 10:18:58 GMT+0530 (India Standard Time)',
    lastMessage: 'test1',
  }
]
const defaultMessageItems=[
  {
    createdAt: 'Thu Oct 29 2020 10:18:58 GMT+0530 (India Standard Time)',
    userName: "Raghu R",
    toUser: "Dinesh G",
    isFromCurrentGroup: true,
    message: 'Test1'
  },
  {
    createdAt: 'Thu Oct 29 2020 12:00:00 GMT+0530 (India Standard Time)',
    userName: "Raghu R",
    toUser: "Dinesh G",
    isFromCurrentGroup: true,
    message: 'Test2'
  },
  {
    createdAt: 'Thu Oct 29 2020 13:06:33 GMT+0530 (India Standard Time)',
    userName: "Dinesh G",
    toUser: "Raghu R",
    isFromCurrentGroup: false,
    message: 'Test3'
  },
  {
    createdAt: 'Thu Oct 29 2020 20:12:59 GMT+0530 (India Standard Time)',
    userName: "Dinesh G",
    toUser: "Raghu R",
    isFromCurrentGroup: false,
    message: 'Test4'
  },
  {
    createdAt: 'Fri Oct 30 2020 00:08:12 GMT+0530 (India Standard Time)',
    userName: "Raghu R",
    toUser: "Dinesh G",
    isFromCurrentGroup: true,
    message: 'Test5'
  }
]
const TeamMessages = ({
  items=DefaultMessages
}) => {
  let [updatedItems, setUpdatedItems] = useState(JSON.parse(JSON.stringify(items)))
  const [maxMessagePagination, setMaxMessagePagination] = useState(0)
  const [activeMessageIndex, setActiveMessageIndex] = useState(0)
  const [newMessage, setNewMessage] = useState('')
  let [updatedMessageItems, setUpdatedMessageItems] = useState(JSON.parse(JSON.stringify(defaultMessageItems)))
  // useEffect(() => {
  //   filteredMessageItems
  // }, )
  const filteredMessageItems = (data, userName="Raghu R") => {
    return data.filter(d => (d.userName === "Raghu R" && updatedItems[activeMessageIndex].userName === d.toUser) || (d.toUser === "Raghu R"  && updatedItems[activeMessageIndex].userName === d.userName))
  }
  const updateDataWithIndex = (data, index, column, newValue, prefixValue)=>{
   // const data = JSON.parse(JSON.stringify(d))
   let modifiedObj = data.splice(index,1)
   modifiedObj[0][column] = prefixValue ? prefixValue + newValue : newValue
   modifiedObj[0]['updatedAt'] = new Date()
   return data.unshift(...modifiedObj)
  }
  const saveMessage = () => {
    // console.log('newMessage: ', newMessage)
    const modifiedMessageItems = [...updatedMessageItems, {
      createdAt: new Date(),
      userName: "Raghu R",
      toUser: updatedItems[activeMessageIndex].userName,
      isFromCurrentGroup: true,
      message: newMessage
    }]
    setUpdatedMessageItems(modifiedMessageItems)
    const prevItems = JSON.parse(JSON.stringify(updatedItems))
    updateDataWithIndex(prevItems, activeMessageIndex, "lastMessage", newMessage, 'You: ')
    setUpdatedItems(prevItems)
    setMaxMessagePagination(Math.ceil(prevItems.length / 3))
    setActiveMessageIndex(0)
    setNewMessage('')
  }
  const handleNewMessage = (e, i) => {
    setNewMessage(i)
  }
  const handleUpdatedMessageItems = (data) => {
    setUpdatedMessageItems(data)
  }
  return (
    <div className="teamContentInner teamMessages">
      <MessagesList
        items={updatedItems}
        activeMessageIndex={activeMessageIndex}
        setActiveMessageIndex={setActiveMessageIndex}
        maxPagination={maxMessagePagination}
      />
      <ActiveMessage
        items={filteredMessageItems(updatedMessageItems)}
        saveMessage={saveMessage}
        newMessage={newMessage}
        handleNewMessage={handleNewMessage}
        recentMessageFrom={updatedItems[activeMessageIndex]}
      />
    </div>
  )
}

export default TeamMessages
