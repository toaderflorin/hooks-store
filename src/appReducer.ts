import { notesReducer, initialNotesState } from './modules/notes/store/reducer'
import { tasksReducer, initialTasksState } from './modules/tasks/store/reducer'
import { NotesAction } from './modules/notes/store/types'
import { TasksAction } from './modules/tasks/store/types'
import { AppState } from './modules/types'

export type Action =
  | NotesAction
  | TasksAction

export const initialAppState = {
  tasks: initialTasksState,
  notes: initialNotesState
}

export default function appReducer(state: AppState, action: Action) {
  return {
    notes: notesReducer(state.notes, action as NotesAction),
    tasks: tasksReducer(state.tasks, action as TasksAction)
  }
}
