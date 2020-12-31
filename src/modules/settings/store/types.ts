export type SettingsState = {
  value: string
}

export const SET_VALUE = 'SET_VALUE'

export type SettingsAction =
  | { type: typeof SET_VALUE, value: string }
