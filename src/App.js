import React from 'react'
import Quiz from './components/Quiz'
import "./App.css"
import { ResultProvider } from './customHooks/ResultProvider'
import {Routes , Route} from "react-router-dom"
import ShowResults from './components/ShowResults'
import Header from './components/Header'
function App() {
  return (
    <ResultProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Quiz />}/>
        <Route path='/results' element={<ShowResults />} />
      </Routes>
    </ResultProvider>
  )
}

export default App