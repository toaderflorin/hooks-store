import { SettingsState, SettingsAction, SET_VALUE } from './types'

export const initialSettingsState: SettingsState = {
  value: ''
}

export function settingsReducer(state: SettingsState, action: SettingsAction) {
  switch (action.type) {
    case SET_VALUE: {
      return {
        ...state,
        value: action.value
      }
    }

    default: {
      return state
    }
  }
}
