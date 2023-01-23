import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Studies from './components/Studies'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Studies />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
