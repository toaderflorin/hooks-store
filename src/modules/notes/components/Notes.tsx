import { useContext, useRef } from 'react'
import { AppContext } from '../../../AppContext'
import * as noteActions from '../store/actions'
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

  const notes = state.notes.notes

  return (
    <div className="screen">
      <h1>Notes</h1>
      <div>
        <div>
          <input ref={titleInputRef} type="text" />
        </div>
        <div>
          <input ref={descriptionInputRef} type="text" />
        </div>
        <div>
          <button onClick={addNoteClick}>Add</button>
        </div>
      </div>

      {notes.map((note: Note) => {
        return (
          <div>
            <div>
              <b>{note.title}</b>
            </div>
            <div>
              <span>{note.description}</span>
            </div>
            <div>
              <button>Remove</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
