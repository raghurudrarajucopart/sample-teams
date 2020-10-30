import React, { useState, useEffect } from 'react'
import PaginationElem from '../Pagination'
import MessageItem from './MessageItem'
import './MessagesList.css'

const MessagesList = ({
  items=[],
  activeMessageIndex,
  setActiveMessageIndex,
  maxPagination,
}) => {

  // const [taskList, setTaskList] = useState([])
  // const [activeTasks, setActiveTasks] = useState([])
  // const [maxPagination, setMaxPagination] = useState(0)
  // const [activeMessageIndex, setActiveMessageIndex] = useState(0)
  //
  // useEffect(() => {
  //   getTasks().then((res) => {
  //     if(res && res.length) {
  //       setTaskList(res)
  //       setActiveTasks(res.slice(0, 5))
  //       setMaxPagination(Math.ceil(res.length / 5))
  //     }
  //   }).catch((err) => {
  //     console.log("error: ", err)
  //   })
  //
	// setMaxPagination(Math.ceil(items.length / 3))
  //  }, [items])

  // const handleActiveTasks = (e, page=0, analyticsEvent) => {
  //   console.log('page: ', page)
  //   setActiveTasks(taskList.slice((page-1)*5, (page)*5))
  // }
  console.log('maxPagination: ', maxPagination)
  return (
    <div className="teamMessagesInner messagesList">
      <div className="messagesListContainer">
        <h1>Recent Messages</h1>
        {
          items && items.length ? items.map((item, index) => {
            return (<MessageItem item={item} index={index} isActiveItem={activeMessageIndex === index} setActiveMessage={setActiveMessageIndex}/>)
          }) : null
        }
      </div>
      { maxPagination && maxPagination.length > 1 ? (
        <PaginationElem
          max={maxPagination}
          onPageChange={(e, page, analyticsEvent) => console.log('e, page, analyticsEvent: ', e, page, analyticsEvent)}
        />
      ) : null

      }
    </div>
  )
}

export default MessagesList
