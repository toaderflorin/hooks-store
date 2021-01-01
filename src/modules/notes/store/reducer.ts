import { NotesState, NotesAction, Note } from './types'
import { ADD_NOTE, REMOVE_NOTE, UPDATE_NOTE } from './actions'
import { v4 } from 'uuid'

export const initialNotesState: NotesState = {
  notes: []
}

export function notesReducer(state: NotesState, action: NotesAction) {
  switch (action.type) {
    case ADD_NOTE: {
      const note = {
        id: v4(),
        title: action.title,
        description: action.description
      }

      return {
        ...state,
        notes: [...state.notes, note]
      }
    }

    case REMOVE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((note: Note) => note.id !== action.noteId)
      }
    }

    case UPDATE_NOTE: {
      return {
        ...state,
        notes: state.notes.map((note: Note) => {
          if (note.id === action.noteId) {
            return {
              ...note,
              title: action.title,
              description: action.description
            }
          } else {
            return note
          }
        })
      }
    }

    default: {
      return state
    }
  }
}
