import { NotesState } from './notes/store/types'
import { TasksState } from './tasks/store/types'

export type ChildrenProps = any

export type AppState = {
  notes: NotesState
  tasks: TasksState
}