import { Dispatch } from 'react'
import { SettingsState, SettingsAction } from './types'
import { SET_VALUE } from './types'

export function setSetting(value: string) {
  return async function (state: SettingsState, dispatch: Dispatch<SettingsAction>) {
    dispatch({
      type: SET_VALUE,
      value
    })
  }
}
