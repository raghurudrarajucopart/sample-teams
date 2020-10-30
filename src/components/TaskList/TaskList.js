import React, { useState, useEffect } from 'react'
import { getTasks } from '../../actions/teams'
import PaginationElem from '../Pagination'
import TaskItem from './TaskItem'
import './TaskList.css'

const TaskList = ({
}) => {

  const [taskList, setTaskList] = useState([])
  const [activeTasks, setActiveTasks] = useState([])
  const [maxPagination, setMaxPagination] = useState(0)

  useEffect(() => {
    getTasks().then((res) => {
      if(res && res.length) {
        setTaskList(res)
        setActiveTasks(res.slice(0, 5))
        setMaxPagination(Math.ceil(res.length / 5))
      }
    }).catch((err) => {
      console.log("error: ", err)
    })

  }, [])

  const handleActiveTasks = (e, page=0, analyticsEvent) => {
    console.log('page: ', page)
    setActiveTasks(taskList.slice((page-1)*5, (page)*5))
  }
  return (
    <div className="teamMeetingsInner taskList">
      <div className="taskListContainer">
        <h1>Tasks</h1>
        {
          activeTasks && activeTasks.length ? activeTasks.map((task) => {
            return (<TaskItem task={task} />)
          }) : null
        }
      </div>
      <PaginationElem
        max={maxPagination}
        onPageChange={(e, page, analyticsEvent) => handleActiveTasks(e, page, analyticsEvent)}
      />
    </div>
  )
}

export default TaskList
