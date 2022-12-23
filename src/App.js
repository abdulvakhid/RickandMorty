import React from 'react'
import "./assets/styles/main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
// import { Character } from './pages/Character/Character'
import { Header } from './components/Header'
import {Routes, Route} from "react-router-dom"
import { Character } from './pages/Character/Character'
import { Episodes } from './pages/Episodes/Episodes'
import { Location } from './pages/Locaion/Location'
import { Single } from './pages/Single';

export const App = () => {
  return (
    <>
    <Header/>
    <div className='container'>
        <Routes >
         < Route path='/' element={<Character/>} />
         < Route path='/single/:id' element={<Single/>} />
         < Route path='/location' element={<Location/>} />
         < Route path='/episodes' element={<Episodes/>} />
        </Routes>

    </div>
    </>
  )
}
