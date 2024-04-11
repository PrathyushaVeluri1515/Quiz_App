import React from 'react'
import Quiz from './components/Quiz'
import "./App.css"
import { ResultProvider } from './customHooks/ResultProvider'
import {Routes , Route} from "react-router-dom"
import ShowResults from './components/ShowResults'
import LoginPage from './components/login/Loginpage'
import Signuppage from './components/login/Signuppage'

import Header from './components/Header'
function App() {
  return (
    <ResultProvider>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path='/home' element={<Quiz />}/>
        <Route path='/results' element={<ShowResults />} />
      </Routes>
    </ResultProvider>
  )
}

export default App