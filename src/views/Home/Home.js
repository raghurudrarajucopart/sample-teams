import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import renderIf from 'render-if'

import TeamHeader from '../../components/TeamHeader'
import TeamContent from '../../components/TeamContent'

import { getUserStatus } from '../../actions/teams'
import './style.css'

const Home = ({ }) => {
  const dispatchRedux = useDispatch()
  const [userStatus, setUserStatus] = useState('available')
  const [statusList, setStatusList] = useState([])
  const [userName, setUserName] = useState('Test User')
  console.log('userStatus: ', userStatus)
// const { showForm, showLoading } = this.state
  useEffect(() => {
    console.log('userName, userStatus: ', userName, userStatus)
    getUserStatus().then((res) => {
      console.log('res: ', res)
      setStatusList(res)
    }).catch((err) => {
      console.log('err: ', err)
    })
    // setUserStatus('doNotDisturb')
  }, [])

  return (
    <React.Fragment>
      <div className="teamsMainView" style={{padding: '12px'}}>
        <div className="teamsHeader">
          <TeamHeader statusList={statusList} userStatus={userStatus} setUserStatus={setUserStatus} userName={userName} />
        </div>
        <div className="teamsContentContainer">
          <TeamContent userStatus={userStatus} userName={userName} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
