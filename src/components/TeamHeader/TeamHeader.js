import React, { useState, useEffect } from 'react'
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { TestImages } from '@uifabric/example-data';
import { Select } from '@copart/core-components'
import { userPresenceStatus } from '../../actions/teams'
import './TeamHeader.css'

const TeamHeader = ({
  statusList=[],
  userName,
  userStatus,
  setUserStatus
}) => {

  const [renderDetails, updateRenderDetails] = React.useState(false);
  const onChange = (ev: any, checked: boolean | undefined) => {
    updateRenderDetails(!!checked);
  };

  const examplePersona: IPersonaSharedProps = {
   imageUrl: TestImages.personaMale,
   imageInitials: 'AL',
   text: 'Annie Lindqvist',
   secondaryText: 'Software Engineer',
   tertiaryText: 'In a meeting',
   optionalText: 'Available at 4:00pm',
 };

  return (
    <div className="headerContainer">
      <div className="userDisplayName">{userName}</div>
      <div className="userStatusContainer">
        <div className="userPersona">
          <Persona
            {...examplePersona}
            size={PersonaSize.size48}
            presence={userPresenceStatus(userStatus)}
            hidePersonaDetails={!renderDetails}
            imageAlt="Annie Lindqvist, status is online"
          />
        </div>
        <div className="userStatusSelection">
          <Select
            label=""
            placeholder="Select Status"
            options={statusList}
            selectedOption={userStatus}
            onChange={(e, d) => setUserStatus(d.key)}
          />
        </div>
      </div>
    </div>
  )
}

export default TeamHeader
