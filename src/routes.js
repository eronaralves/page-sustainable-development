import React from "react"
import {
  Route,
  Routes
} from "react-router-dom"

// Components
import Home from "./pages/home"
import Objetivos from "./pages/Objetivos"


export default function RoutesLink() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Objetivos/:id" element={<Objetivos/>}/>
    </Routes>
  )
}