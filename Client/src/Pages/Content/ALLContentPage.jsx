import React from 'react'
import About from './About'
import Client from './Client'
import Services from './Services'
import Contact from './Contact'
import Career from './Career'
import { Routes, Route } from 'react-router-dom';
const ALLContentPage = () => {
  return (
    <div>
         <Routes>
          <Route path='/' element={ < About/>} />
          <Route path='/Client' element={     <Client/> } />
          <Route path='/Services' element={        <Services/> } />
          <Route path='/Contact' element={       <Contact/> } />
          <Route path='/Carer' element={         <Career/> } />
       </Routes>
    </div>
  )
}

export default ALLContentPage