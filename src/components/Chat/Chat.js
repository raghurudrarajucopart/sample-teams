import React, { useRef, useEffect } from 'react'
import { isEmpty, isNil, equals } from 'ramda'

import { formatter } from '../../utils/DateUtils'
import MessageBubble from './MessageBubble'
import './Chat.css'

import locale from '../../utils/locale'

const Chat = ({ items=[], unreadMessageIndex, dateFormat = 'MM/DD/YYYY' }) => {
  // const messagesEnd = useRef(null)
  // const unreadRef = useRef(null)

  // const scrollToBottom = () => {
  //   !isNil(unreadMessageIndex)
  //     ? unreadRef.prototype.scrollIntoView({ behavior: 'smooth' })
  //     : messagesEnd.prototype.scrollIntoView({ behavior: 'smooth' })
  // }
  //
  // useEffect(scrollToBottom, [items])

  const getDateInRequiredFormat = (date: string): string => {
    const getDateTime = (dateString) => new Date(dateString)
    return formatter(getDateTime(date), dateFormat)
  }

  const getTimelineString = (dateString: string): string => {
    if (equals(getDateInRequiredFormat(dateString), getDateInRequiredFormat(new Date()))) return locale('Today')
    else if (
      equals(getDateInRequiredFormat(dateString), getDateInRequiredFormat(new Date().setDate(new Date().getDate() - 1)))
    )
      return locale('Yesterday')
    else return getDateInRequiredFormat(dateString)
  }

  const renderMessageBubbles = () => {
    if (!isEmpty(items)) {
      return items.map((item, idx) => {
        return (
          <div key={`_${item.userName}_${idx}_`}>
            {!isNil(unreadMessageIndex) && equals(idx, unreadMessageIndex) && (
              <div>
                <div className="UnreadMessageTag">
                  <span>{locale('Unread Messages')}</span>
                </div>
              </div>
            )}
            {
                !equals(
                  getDateInRequiredFormat(items[idx]?.createdAt),
                  getDateInRequiredFormat(items[idx - 1]?.createdAt)
                ) && (
                  <div className="TimelineMessageTag">
                    <span>{getTimelineString(items[idx]?.createdAt)}</span>
                  </div>
                )
              }
            >
            <div key={idx}>
              <MessageBubble item={item} />
            </div>
          </div>
        )
      })
    } else {
      return <div className="EmptyMessage">{locale('No Messages')}</div>
    }
  }
  return (
    <div className="messagesContainer">
      <div className="messages">
        {renderMessageBubbles()}
      </div>
    </div>
  )
}

export default Chat
