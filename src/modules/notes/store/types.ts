import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from './actions'

export type Note = {
  id: string
  title: string
  description: string
}

export type NotesState = {
  notes: Note[]
}

export type NotesAction =
  | { type: typeof ADD_NOTE, title: string, description: string }
  | { type: typeof REMOVE_NOTE, noteId: string }
  | { type: typeof UPDATE_NOTE, noteId: string, title: string, description: string }
