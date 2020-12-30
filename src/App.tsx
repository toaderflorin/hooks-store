import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" />
      <Route path="/settings" />
    </BrowserRouter>
  )
}

export default App
