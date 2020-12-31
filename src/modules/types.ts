import { SettingsState } from './settings/store/types'
import { TasksState } from './tasks/store/types'

export type ChildrenProps = any

export type AppState = {
  settings: SettingsState
  tasks: TasksState
}