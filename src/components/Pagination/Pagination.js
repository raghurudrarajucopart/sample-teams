import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Persona, Select } from '@copart/core-components'
import Pagination from '@atlaskit/pagination';
import './Pagination.css'

const PaginationElem = ({
max=5,
// prevLabel='<<',
// nextLabel='>>',
onPageChange,
defaultSelectedIndex=0,
}) => {
  return (
    <div className="teamsPagination">
      <Pagination
        pages={Array.from({length:max},(v,k)=>k+1)}
        defaultSelectedIndex={defaultSelectedIndex}
        onChange={(e, page, analyticsEvent) => onPageChange(e, page, analyticsEvent)}
      />
    </div>
  )
}

export default PaginationElem
