import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Main from './pages/index.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
