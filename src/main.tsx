import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Atomic } from '@atomic'
import './index.css'

/**
 * Main App
 * global routing and high-level Uui
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full text-white font-sans overflow-x-hidden">
        <Atomic.Atoms.Background />
        
        <Routes>
          <Route path="/" element={<Atomic.Pages.Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(<App />)
