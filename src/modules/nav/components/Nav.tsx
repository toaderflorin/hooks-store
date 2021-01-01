import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div id="nav">
      <div>
        The title
      </div>
      <div>
        <Link to="/">Tasks</Link>
        <Link to="/settings">Notes</Link>
      </div>
    </div>
  )
}
