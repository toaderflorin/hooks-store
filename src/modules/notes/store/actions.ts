import { Dispatch } from 'react'
import { NotesState, NotesAction } from './types'

export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'

export function addNote(title: string, description: string) {
  return async function (state: NotesState, dispatch: Dispatch<NotesAction>) {
    dispatch({
      type: ADD_NOTE,
      title,
      description
    })
  }
}
