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
        <Link to="/">To link 1</Link>
        <Link to="/settings">To link 2</Link>
      </div>
    </div>
  )
}
