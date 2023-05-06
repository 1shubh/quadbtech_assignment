import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../Pages/Home'
import { SinglePage } from '../Pages/SinglePage'
import {Book} from "../Pages/Book"
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/more/:id" element={<SinglePage/>}/>
        <Route path="/bookticket" element={<Book/>}/>
      </Routes>
    </div>
  )
}
