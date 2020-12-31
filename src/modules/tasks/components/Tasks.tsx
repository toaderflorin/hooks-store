import { useContext } from 'react'
import { Task } from '../store/types'
import { AppContext } from '../../../AppContext'
import * as tasksActions from '../store/actions'

const { execute } = useContext(AppContext)

type Props = {
  tasks: Task
}

export default function Tasks(props: Props) {
  function addTaskClick() {
    execute(tasksActions.addTask('description'))
  }

  return (
    <div>
      <div>
        <input type="text" />
        <button onClick={addTaskClick} />
      </div>
      <div>

      </div>
    </div>
  )
}
