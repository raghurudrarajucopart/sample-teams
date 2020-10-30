import React from 'react'
import { Icon, Tooltip } from '@copart/core-components'
import './TaskList.css'

const TaskItem = ({
  task
}) => {
  return (
    <div className="taskItem">
    <div key={task.id} className={`${task.completed ? 'task-completed' : 'task-pending'}`}>{task.title}
    </div>
    </div>
  )
}

export default TaskItem
