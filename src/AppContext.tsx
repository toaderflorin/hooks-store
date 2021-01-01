import React, { useReducer, Dispatch } from 'react'
import { notesReducer, initialNotesState } from './modules/notes/store/reducer'
import { tasksReducer, initialTasksState } from './modules/tasks/store/reducer'
import { AppState, ChildrenProps } from './modules/types'
import { NotesAction } from './modules/notes/store/types'
import { TasksAction } from './modules/tasks/store/types'

export type ExecuteFunc = (state: AppState, dispatch: Dispatch<any>) => Promise<void> | void

type Action =
  | NotesAction
  | TasksAction

export type AppContextType = {
  state: AppState
  execute: (action: ExecuteFunc) => Promise<void>
}

const initialAppState = {
  tasks: initialTasksState,
  notes: initialNotesState
}

function appReducer(state: AppState, action: Action) {
  return {
    notes: notesReducer(state.notes, action as NotesAction),
    tasks: tasksReducer(state.tasks, action as TasksAction)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = React.createContext({} as any as AppContextType)

export default function AppContextProvider(props: ChildrenProps) {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  async function execute(action: (state: AppState, dispatch: Dispatch<Action>) => Promise<void> | void) {
    try {
      await action(state, dispatch)
    } catch (error) {
      // take appropriate action and report the error
      alert('The application encountered an error.')
    }
  }

  return (
    <AppContext.Provider value={{ state, execute }}>
      {props.children}
    </AppContext.Provider>
  )
}
