import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './actions'

export type Task = {
  id: string
  description: string
  ticked: boolean
}

export type TasksState = {
  tasks: Task[]
}

export type TasksAction =
  | { type: typeof ADD_TASK, description: string }
  | { type: typeof REMOVE_TASK, taskId: string }
  | { type: typeof TOGGLE_TASK, taskId: string }