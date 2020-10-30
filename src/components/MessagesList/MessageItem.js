import React from 'react'
import { Icon, Tooltip } from '@copart/core-components'
import { IPersonaSharedProps, Persona, PersonaInitialsColor, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { DateTimeFormat } from '../../utils/DateUtils'
import './MessagesList.css'

const examplePersona: IPersonaSharedProps = {
  secondaryText: 'You: Hi',
};

const personaWithInitials: IPersonaSharedProps = {
  ...examplePersona,
  text: 'Raghu Varma R',
  imageInitials: 'RV',
};

const MessageItem = ({
  item,
  index,
  isActiveItem=false,
  setActiveMessage
}) => {
  // console.log('item, index: ', item, index)
  return (
    <div className={`messageItem ${isActiveItem ? 'active' : 'inActive'}`} onClick={() => setActiveMessage(index)}>
      <div style={{display: 'flex', width: 'calc(100%)'}}>
        <Persona key={ item.message + item.updatedAt} {...examplePersona} text={item.userName} secondaryText={item.lastMessage} size={PersonaSize.size72} />
      </div>
      <div style={{display: 'flex', alignItems: 'center'}} key={item.message + item.updatedAt + 'time'}>{DateTimeFormat(item.updatedAt)}</div>
    </div>
  )
}

export default MessageItem
