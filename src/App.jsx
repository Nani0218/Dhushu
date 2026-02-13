import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ProposalPage from './components/ProposalPage'
import EnvelopePage from './components/EnvelopePage'
import LoveLetterPage from './components/LoveLetterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/proposal" element={<ProposalPage />} />
      <Route path="/envelope" element={<EnvelopePage />} />
      <Route path="/love-letter" element={<LoveLetterPage />} />
    </Routes>
  )
}

export default App
