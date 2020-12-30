export type Task = {
  id: string
  description: string
  ticked: boolean
}

export type TasksState = {
  tasks: Task[]
}
