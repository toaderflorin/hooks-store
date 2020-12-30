type Task = {
  description: string
  ticked: boolean
}

type TasksState = {
  tasks: Task[]
}

export const initialTasksState: TasksState = {
  tasks: []
}
