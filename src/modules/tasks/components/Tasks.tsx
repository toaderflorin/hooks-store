import { useContext, useRef } from 'react'
import { Task } from '../store/types'
import { AppContext } from '../../../AppContext'
import * as tasksActions from '../store/actions'
import './Tasks.css'

export default function Tasks() {
  const { state, execute } = useContext(AppContext)
  const descriptionInputRef = useRef<HTMLInputElement>(null)

  function addTaskClick() {
    const description = (descriptionInputRef.current as HTMLInputElement).value
    execute(tasksActions.addTask(description))
  }

  function removeTaskClick(taskId: string) {
    execute(tasksActions.removeTask(taskId))
  }

  function toggleTaskClick(taskId: string) {
    execute(tasksActions.toggleSize(taskId))
  }

  const tasks = state.tasks.tasks

  return (
    <div style={{ marginTop: '100px', padding: '15px' }}>
      <div>
        <input ref={descriptionInputRef} type="text" />
        <button onClick={addTaskClick}>Add</button>
      </div>
      <div>
        {tasks.map((task: Task) => (
          <div className="task">
            <div className="task-description">
              <input type="checkbox" id={task.id} checked={task.ticked} onChange={() => toggleTaskClick(task.id)} />
              <label htmlFor={task.id}>{task.description}</label>
            </div>
            <button onClick={() => removeTaskClick(task.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}
