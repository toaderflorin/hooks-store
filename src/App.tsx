import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './modules/nav/components/Nav'
import AppContextProvider from './AppContext'
import Tasks from './modules/tasks/components/Tasks'
import Settings from './modules/settings/components/Settings'

export default function App() {
  return (
    <AppContextProvider>
      <Nav />
      <BrowserRouter>
        <Route path="/" component={Tasks} />
        <Route path="/settings" component={Settings} />
      </BrowserRouter>
    </AppContextProvider>
  )
}

