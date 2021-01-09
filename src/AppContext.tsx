import React, { useReducer, Dispatch } from 'react'
import { AppState, ChildrenProps } from './modules/types'
import appReducer, { initialAppState, Action } from './appReducer'

export type ExecuteFunc = (state: AppState, dispatch: Dispatch<any>) => Promise<void> | void

export type AppContextType = {
  state: AppState
  execute: (action: ExecuteFunc) => Promise<void>
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
