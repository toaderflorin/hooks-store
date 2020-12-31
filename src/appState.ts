import { SettingsState } from './modules/settings/store/types'
import { TasksState } from './modules/tasks/store/types'
import { settingsReducer } from './modules/settings/store/reducer'
import { tasksReducer } from './modules/tasks/store/reducer'

type Action = any

export default function rootReducer(state: any, action: Action) {
  return {
    settings: settingsReducer(state.settings, action),
    tasks: tasksReducer(state.tasks, action)
  }
}
