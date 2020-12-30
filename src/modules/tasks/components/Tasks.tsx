import { Task } from '../store/types'

type Props = {
  tasks: Task
}

export default function Tasks(props: Props) {
  return (
    <div>
      This is the Tasks page.
    </div>
  )
}
