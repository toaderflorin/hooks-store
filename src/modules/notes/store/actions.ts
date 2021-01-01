import { Dispatch } from 'react'
import { NotesAction } from './types'
import { AppState } from '../../types'

export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'

export function addNote(title: string, description: string) {
  return async function (state: AppState, dispatch: Dispatch<NotesAction>) {
    dispatch({
      type: ADD_NOTE,
      title,
      description
    })
  }
}

export function removeNote(noteId: string) {
  return async function (state: AppState, dispatch: Dispatch<NotesAction>) {
    dispatch({
      type: REMOVE_NOTE,
      noteId
    })
  }
}

export function updateNote(noteId: string, title: string, description: string) {
  return async function (state: AppState, dispatch: Dispatch<NotesAction>) {
    dispatch({
      type: UPDATE_NOTE,
      noteId,
      title,
      description
    })
  }
}