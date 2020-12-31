import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './modules/nav/components/Nav'
import AppContextProvider, {AppContext} from './AppContext'

export default function App() {
  return (
    <AppContextProvider>
      <Nav />
      <BrowserRouter>
        <Route path="/" />
        <Route path="/settings" />
      </BrowserRouter>
    </AppContextProvider>
  )
}

