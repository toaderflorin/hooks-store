import { Dispatch } from 'react'
import { SettingsState, SettingsAction } from './types'

export const SET_VALUE = 'SET_VALUE'

export function setSetting(value: string) {
  return async function (state: SettingsState, dispatch: Dispatch<SettingsAction>) {
    dispatch({
      type: SET_VALUE,
      value
    })
  }
}
