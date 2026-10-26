import { useState } from 'react'
import NavBar from './components/navBar'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router'
import RecipeCard from './Pages/RecipeCard'
import RecipeDetails from './Pages/RecipeDetails'
import NotFound from './Pages/notFound'
//import './App.css'

function App() {


  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <NavBar />
      <Routes>

        <Route>
          <Route path="/" element={<Home />} />
          {/* <Route path="/recipe/:id" element={<RecipeDetail />} /> */}
          <Route path="/recipe/:id" element={<RecipeDetails/>} />
          <Route path="*" element={<NotFound/>} />

        </Route>


      </Routes>
    </div >
  )
}

export default App
