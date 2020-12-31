export type Task = {
  id: string
  description: string
  ticked: boolean
}

export type TasksState = {
  tasks: Task[]
}

export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'

export type TasksAction =
  | { type: typeof ADD_TASK, description: string }
  | { type: typeof REMOVE_TASK, taskId: string }
  | { type: typeof TOGGLE_TASK, taskId: string }