import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './modules/nav/components/Nav'
import AppContextProvider from './AppContext'
import Tasks from './modules/tasks/components/Tasks'
import Settings from './modules/notes/components/Notes'

export default function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Tasks} />
        <Route exact path="/notes" component={Settings} />
      </BrowserRouter>
    </AppContextProvider>
  )
}
