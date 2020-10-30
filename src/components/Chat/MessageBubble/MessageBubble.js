import React from 'react'

import { isEmpty, isNil } from 'ramda'

import './MessageBubble.css'

const dummyDocPath =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Icons8_flat_document.svg/240px-Icons8_flat_document.svg.png'

export const MessageBubble = ({ item }) => {
  const messageDateTime = new Date(item.createdAt).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')

  const renderItemAttachments = () => {
    return item.attachments.map((attachment, idx) => (
      <a
        key={`_${attachment.link}_${idx}_`}
        className="thumbnail"
        target="_blank"
        href={attachment.link}
        download={attachment.name}
      >
        <img
          key={idx}
          className="image"
          src={attachment.type === 'pdf' ? dummyDocPath : attachment.link}
          alt="attachment"
          title={attachment.name}
        />
        <div className="ImageTitle" title={attachment.name}>
          {attachment.name}
        </div>
      </a>
    ))
  }

  return (
    <div className="MessageBubble">
      <div className={item.isFromCurrentGroup ? 'RightMessage' : 'LeftMessage'}>
        {item.message}
        <div className="MessageMetaData">
          <span className="messageTime">{messageDateTime}</span>
          <span>{item.userName}</span>
        </div>
        {!isNil(item.attachments) && !isEmpty(item.attachments) ? (
          <div className="Thumbnails">{renderItemAttachments()}</div>
        ) : null}
      </div>
    </div>
  )
}
