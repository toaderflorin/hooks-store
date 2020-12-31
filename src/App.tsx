import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './modules/nav/components/Nav'

export default function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Route path="/" />
        <Route path="/settings" />
      </BrowserRouter>
    </div>
  )
}

