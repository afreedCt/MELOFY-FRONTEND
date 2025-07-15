import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick={false}
        theme="colored"
      />
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  )
}

export default App