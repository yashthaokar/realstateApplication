import React from 'react'
import Header from '../common/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import Footer from '../common/footer/Footer'
import Mylist from '../common/Header/Mylist/Mylist'


const Pages = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/fav' element={<Mylist/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>  
  )
}

export default Pages