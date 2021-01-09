import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div id="nav">
      <div>
        <Link className="link" to="/">Tasks</Link>
        <Link className="link" to="/notes">Notes</Link>
      </div>
    </div>
  )
}
