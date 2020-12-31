import { useContext } from 'react'
import { Task } from '../store/types'
import { AppContext } from '../../../AppContext'
import * as tasksActions from '../store/actions'


export default function Tasks() {
  const { state, execute } = useContext(AppContext)

  function addTaskClick() {
    execute(tasksActions.addTask('description'))
  }

  const tasks = state.tasks.tasks

  return (
    <div style={{ marginTop: '200px' }}>
      <div>
        asdasdass
        <input type="text" />
        <button onClick={addTaskClick} />
      </div>
      <div>
        {tasks.map((task: Task) => (
          <div>
            {task.description}
          </div>
        ))}
      </div>
    </div>
  )
}
