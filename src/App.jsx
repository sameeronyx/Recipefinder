import { useState } from 'react'
import NavBar from './components/navBar'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router'
import RecipeCard from './Pages/RecipeCard'
//import './App.css'

function App() {


  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <NavBar />
      <Routes>

        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />

        </Route>


      </Routes>
    </div >
  )
}

export default App
