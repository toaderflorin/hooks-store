import { useContext, useRef } from 'react'
import { AppContext } from '../../../AppContext'
import * as noteActions from '../store/actions'
import { notesReducer } from '../store/reducer'
import { Note } from '../store/types'

export default function Notes() {
  const { state, execute } = useContext(AppContext)

  const titleInputRef = useRef<HTMLInputElement>(null)
  const descriptionInputRef = useRef<HTMLInputElement>(null)

  function addNoteClick() {
    const title = (titleInputRef.current as HTMLInputElement).value
    const description = (descriptionInputRef.current as HTMLInputElement).value

    execute(noteActions.addNote(title, description))
  }

  function removeNoteClick(noteId: string) {
    execute(noteActions.removeNote(noteId))
  }

  // function toggleTaskClick(taskId: string) {
  //   execute(noteActions.toggleSize(taskId))
  // }``
  const notes = state.notes.notes

  return (
    <div className="screen">
      <h1>Notes</h1>
      {notes.map((note: Note) => {
        return null
      })}
    </div>
  )
}
