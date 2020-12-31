import { SET_VALUE } from './actions'

export type SettingsState = {
  value: string
}

export type SettingsAction =
  | { type: typeof SET_VALUE, value: string }
